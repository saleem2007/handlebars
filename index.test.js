const {sequelize} = require('./db');
const {Restaurant, Menu, FoodItems} = require('./index');

/*

describe('Restaurant', () => {

    beforeAll(async () => {
        await sequelize.sync({force: true});
    })

    test('can create restaurant', async () => {
        const restaurant = await Restaurant.create({name: 'On The Border', location: 'Dallas TX'});
        expect(restaurant.id).toBe(1);
         
    })

    test('restaurant has menu items', async () => {
        const restaurant = await Restaurant.create({name: 'Apple Bees', location: 'Irving TX'});

        //creating appetizers
        const meal1 = await Menu.create({appetizer : 'Onion Rings', lunch: 'Cheeseburger', dinner: 'Chicken Fried Steak', dessert: 'Lava Cake'});
        const meal2 = await Menu.create({appetizer: 'Chicken Tenders', lunch: 'Chicken Salad', dinner: 'Sirloin Steak', dessert: 'Cheese Cake'});
        const meal3 = await Menu.create({appetizer: 'Mozarella Sticks', lunch: 'Veggie Soup', dinner: 'Chicken Alfredo', dessert: 'Vanilla Dream'});
        const meal4 = await Menu.create({appetizer: 'Baked Potato', lunch: 'Tour Of Italy', dinner: 'Shrimp and Steak', dessert: 'Chocolate Fudge Icecream'});

        await restaurant.addMenu(meal1);
        await restaurant.addMenu(meal2);
        await restaurant.addMenu(meal3);
        await restaurant.addMenu(meal4);

        const items = await restaurant.getMenus(); // association magic methods
        expect(items.length).toBe(4);
        

    })

    test('food items has name and cost', async() => {
        const appetizer = await Menu.create();

        const onionRing = await FoodItems.create({name: 'Onion Rings', cost: 6.99});
        const chickenTender = await FoodItems.create({name: 'Chicken Tenders', cost: 8.99});
        const mozarellaSticks = await FoodItems.create({name: 'Mozarella Sticks', cost: 7.99});
        const bakedPotato = await FoodItems.create({name: 'Baked Potato', cost: 5.99});

        await appetizer.addFoodItem(onionRing);
        await appetizer.addFoodItem(chickenTender);
        await appetizer.addFoodItem(mozarellaSticks);
        await appetizer.addFoodItem(bakedPotato);
        
        const appetizers = await appetizer.getFoodItems();
        expect(appetizers.length).toBe(4);
        expect(appetizers[0] instanceof FoodItems).toBeTruthy;
        
    })

    test('see if a restaurant has a location', async () => {
        const restaurant = await Restaurant.create({name: 'Wing Stop', location: 'Grapevine TX'});

        expect(restaurant.name).toBe('Wing Stop');
    })

    test('check to pass ratings greater than 4.0', async () => {
        const restaurant = await Restaurant.create({name: 'Olive Garden', location: 'FT Worth TX', ratings: 4.2});
        
       
        expect(restaurant.ratings).toBeGreaterThanOrEqual(4.0);
        
    })

})

*/