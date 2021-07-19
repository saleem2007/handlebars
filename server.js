const express = require('express');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const app = express();

const { Restaurant, Menu, FoodItems } = require('./index');
const { sequelize } = require('./db');

const port = 8000;

// serve static assets from public folder
app.use(express.static('public'));

//Configures handlebars library to work well w/ Express + Sequelize model
const handlebars = expressHandlebars({
    handlebars : allowInsecurePrototypeAccess(Handlebars)
})

//Tell this express app we're using handlebars
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars')


app.use(express.json());

// creating a new restaurant with this method
app.post('/restaurants', async (req, res) => {

    let newRestaurant = await Restaurant.create(req.body);
    res.send('Created !!!');
    
})

//updating my restaurant with this method
app.put('/restaurants/:id', async (req, res) => {

    let updateRestaurant = await Restaurant.update(req.body, {
        where : {id: req.params.id} // update a restauarant where id mathes the req.params
    })
    res.send('Updated !!!!!');
})

//deleting a restauarant with this method
app.delete('/restaurants/:id', async (req, res) => {

    await Restaurant.destroy({
        where : {id: req.params.id} // delete the restauarant by id where it matches with req.body
    })
    res.send('Deleted Gone !!!!!!!!!!!!');
})

// activating the port and seed function 
app.listen(port, async () => {

    await seed();
    console.log(`listening to port http://localhost ${port}`);
})
// logging hello world as a test for get method
app.get('/', (req,res) => {

    res.send('Hello World');

})
// getting all restauarants with this function
app.get('/restaurants', async (req, res) => {

    let restaurants = await Restaurant.findAll();
    //res.json({ restaurant });
    res.render('restaurants', { restaurants })// 2 args: string name of template, data to put in
})
// getting restaurant by id and it associated menus
app.get('/restaurants/:id', async (req, res) => {

    let restaurant = await Restaurant.findByPk(req.params.id, {include: Menu});
    //res.json({ restaurant });
    res.render('restaurant', { restaurant });
})
// getting menu of all the restaurants
app.get('/menu', async (req, res) => {

    let menu = await Menu.findAll();
    res.json({ menu });

})
// getting menu by id and its associated restaurant
app.get('/menu/:id', async (req, res) => {

    let menu = await Menu.findByPk(req.params.id, {include: Restaurant});
    res.json({ menu });

})

// build the database
async function seed() {

    await sequelize.sync({force: true});

    let oliveGarden = await Restaurant.create({name: 'Olive Garden', image: '/img/olive-garden-logo.gif', location: 'Grapevine', ratings: 4.1});
    let ontheBorder = await Restaurant.create({name: 'On The Border', image: '/img/giphy-preview.gif', location: 'Bedford', ratings: 4.2});

    let oliveMenu = await Menu.create({appetizer: 'Fried Mozzarella', lunch: 'Fettuccine Alfredo', dinner: 'Chicken Parmiginana', dessert: 'Chocolate Brownie Lasagna'});
    let oliveMenu2 = await Menu.create({appetizer: 'Lasagna Fritta', lunch: 'Cheese Ravioli', dinner: 'Tour of Italy', dessert: 'Black Tie Mousse Cake'});

    let borderMenu = await Menu.create({appetizer: 'Chips and Queso', lunch: 'Border Burrito', dinner: 'Steak Fajitas', dessert: 'Lava Cake'});
    let borderMenu2 = await Menu.create({appetizer: 'Border Sampler', lunch: 'Quesadilla Combo', dinner: 'Carne Asada', dessert: 'Caramel Churros'});


    await oliveGarden.addMenu(oliveMenu);
    await oliveGarden.addMenu(oliveMenu2);

    await ontheBorder.addMenu(borderMenu);
    await ontheBorder.addMenu(borderMenu2);
    
    console.log('db seeded!!');

}