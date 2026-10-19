/* ==========================================================
   Heart N Soul - private chef menus
   Every private chef menu lives here. Edit a dish, a price or
   a description and both the menu page and the Private Chef
   page update.

   To add a new menu: copy one block, give it a new key, then
   copy any menu .html file and change data-menu to that key.

   prices: per adult for each course; kid is per child.
           Leave kid out if the menu has no kids menu.
   itemPrices: optional, a price for every dish (same order as
           the dishes). When a menu has these, guests pick their
           dishes and each one is priced on its own.
   tags:   kid, gf, df, vg, sf, pf, tnf  (see TAGS below)
   photo:  image shown at the top of the menu and on its card.
   video:  optional short looping clip (.mp4); photo is shown
           while it loads.
   ========================================================== */

var TAGS = {
  kid: "Kid friendly",
  vg: "Vegetarian capable",
  gf: "Gluten-free capable",
  df: "Dairy-free capable",
  sf: "Shellfish-free capable",
  pf: "Peanut-free capable",
  tnf: "Tree nut-free capable"
};

/* Kids menu: $20 per child. Kids 5 and under eat free. */
var KID_PRICE = 20;

var KIDS_MENU = [
  ["The Land Before Time", "House Made Chicken Nuggets Or Beef Tips | Lava Gravy | Mashed Mountain | Broccoli Trees"],
  ["Drum Roll Sliders", "Grass Fed Beef Sliders | Homemade Brioche Buns | House Made Ketchup | Fresh Fries or Zucchini Fries | Steamed Veggies"],
  ["Taqi Taqi", "Taquitos (rolled Tacos) Choice Of Meat Or Bean and Cheese | Dipping Sauce | Rice | Veggies"],
  ["It Aint E-z Being Cheeeeee-z", "Sour Dough | Choice Of Cheese and Meat | Tomato Bisque"],
  ["Mom's Sghetti", "Fresh Pasta (Whatever Noodle the Kids Like) | Sauce (Butter, Tomato, Or Cheese) | Protein (Chicken, Meatballs, Or Shrimp)"]
];

var MENUS = {
  "little-italy": {
    name: "Little Italy",
    page: "little-italy.html",
    photo: "images/little-italy.jpg",
    photoAlt: "Lady An The Scampi: shrimp over fresh ribbon pasta with roasted asparagus",
    desc: "All the decadent rich flavors of Italy with a chef's kiss. From pasta to the fresh cheeses and herbs. All that's missing is the gondola boat ride.",
    tags: ["kid"],
    min: 399,
    prices: { kid: KID_PRICE },
    // Each dish has its own price, in the same order as the dishes below
    itemPrices: {
      en: [88, 105, 99, 92],
      ap: [35, 38, 38],
      so: [34, 32, 34],
      sa: [36, 34, 38],
      de: [40, 36, 38]
    },
    courses: {
      en: [
        ["Chicken Carbonara", "Grilled Chicken Thighs | Thick Cut Bacon | Bucatini Pasta | Fresh Peas | Roasted Cauliflower | Roasted Rainbow Carrots"],
        ["Under the Venice Streets", "Poached Sea Bass | Puttanesca Sauce | Pan Fried Spaetzle | Creamy Spinach & Mushrooms"],
        ["Lady An The Scampi", "15-20 Shrimp | Linguini | Dry white Wine | Garlic Butter | Crushed Peppers | Lemon | Asparagus Spears"],
        ["Garfield's Dream", "Lasagna Pasta | Ricotta Herb Spread | Arrabbiata Sauce | Pan Fried Crumbled Beef & Sausage | Mozzarella | Squash Chips"]
      ],
      ap: [
        ["FIGured When in Rome", "Roasted Garlic Crustini | Fig Compote | Spicy Calabrese | Red Wine Poached Pears | Balsamic | Mint"],
        ["Italian Stallion Sliders", "Parmesan Chicken Thighs | Diced Marinara | Smoked Provolone | Frisée | Roasted Garlic Aioli | Focaccia Slider Buns"],
        ["Zuch!! Leaning Tower of Pisa!", "Parmesano Zucchini Fries | Marinara Dipping Sauce | Mozzarella Sticks | Pesto"]
      ],
      so: [
        ["Stracciatella Classic", "Roasted Chicken Stock | Parmesan Chicken Meatballs | Spinach | Shaved Cured Egg Yolks | Shaved Parmigiana Reggiano"],
        ["Jolly Fagioli", "Cannelloni Pasta | Cannellini Beans | Herbs | Roasted Tomato | Chicken Broth | Fried Italian Sausage"],
        ["Streets of Venice", "Gnocchi | Chicken | Basil Cream | Spinach"]
      ],
      sa: [
        ["I Can't Believe It's Not Salad!", "Grilled Artichoke Hearts | Sundried Tomatoes | Capricola | Salami | Mozzarella | Green Olives | Red Peppers | Balsamic Glaze | Basil"],
        ["Chopped Italy", "Romaine | Banana Peppers | Olives | Salami | Red Onion | Fresh Mozzarella Balls | Cherry Tomatoes | Lemon Herb Vinaigrette or Green Goddess"],
        ["Char Char Caesar", "Grilled Romaine Hearts | Fresh White Truffle Caesar Dressing | Shaved Parmigiana Reggiano | Roasted Garlic & Herb Focaccia Croutons | Candied Lemon Peel"]
      ],
      de: [
        ["Hazelnut Moon", "Hazelnut | Biscoff | Chocolate Budino | Biscoff Whip Cream | Praline Hazelnut Sauce"],
        ["Cotta Have Dessert", "Vanilla Bean Heavy Cream | Gelatin Sheets | Blueberry Jam | Candied Lemon Zest or Mixed Berry Marmalade"],
        ["It's About Tiramisu", "Lady Fingers | Mascarpone Spread | Coffee | Rum | Dark Chocolate"]
      ],
      kid: KIDS_MENU
    }
  },

  "soul-of-the-south": {
    name: "Soul Of The South",
    page: "soul-of-the-south.html",
    photo: "images/soul-of-the-south.jpg",
    photoAlt: "Crispy fried chicken over macaroni and cheese",
    desc: "This menu will touch your heart and comfort the soul. It has it all but the bed for the nap you will need afterwards.",
    tags: ["kid"],
    min: 399,
    prices: { kid: KID_PRICE },
    // Each dish has its own price, in the same order as the dishes below
    itemPrices: {
      en: [78, 89, 76],
      ap: [32, 32, 38],
      so: [32, 32, 32],
      sa: [32, 32, 34],
      de: [35, 36, 38]
    },
    courses: {
      en: [
        ["That's All Folks", "Eastern Carolina BBQ Sauce | Pulled Pork | Apple Cider Slaw | Brioche Bun | Four Cheese Macaroni | Garlic Green Beans"],
        ["Brisk, Southern Night Smoke", "Smoked Brisket | Baked Beans | Collard Greens"],
        ["Honey, The Chicken Crossed The Road", "Honey Glazed Cayenne Fried Chicken | Collard Greens | Boursin Smashed Potatoes | Fried Onion Strings"]
      ],
      ap: [
        ["Orange Crush", "Grilled Chicken Wings | Spicy Orange Glaze | Homemade Bleu Cheese Or Ranch"],
        ["The Dog That Don't Bark", "Hush Puppies | Burnt Orange Reduction | Pickled Onions & Jalapeños | Roasted Garlic Aioli"],
        ["Grit Iron Sea", "White Cheddar Grits | Garlic & White Wine Shrimp | Pancetta Lardons | Scallions"]
      ],
      so: [
        ["Dump, Dump", "Roasted Chicken | Homemade Dumplings | Cabbage"],
        ["Sylvester's Sufferin Succotash", "Carrots | Corn | Green Beans | Okra | Tomato | Turnip"],
        ["Piggy's Potato", "Thick Cut Applewood Bacon | Diced Yukon Potatoes | Roasted Garlic | Jalapeño | Cheddar"]
      ],
      sa: [
        ["Spud Got Back", "Roasted Potato | Thick Cut Bacon | Cream Cheese Dressing | Cheddar | Scallions"],
        ["Pecan at the Strawberry Fields", "Frisée | Arugula | Spiced Candied Pecans | Purple Haze Goat Cheese | Strawberry Vinaigrette | Sourdough Crostini"],
        ["Chicken Coop Cobb", "Spring Mix | Fire-Roasted Corn | Sun-Dried Heirloom Tomatoes | Black Beans | Soft Boiled Eggs | Cornbread Croutons | Grilled Chicken | Herb Vinaigrette"]
      ],
      de: [
        ["Southern Comfort", "Puff Pastry Tartlets | Pecan Pie Filling | Applejack Caramelized Apples | Cheesecake Whipped Cream | Toasted Crushed Pecans"],
        ["One Peel Of A Time", "Vanilla Wafer Ladyfingers | Creme De Banana Cream | Sliced Bananas | Vanilla Bean Meringue | Crushed Wafers | Lemon Twill"],
        ["Pe-king Pie", "Pecans | Salted Caramel Whiskey Sauce | Maple Pecan Ice Cream"]
      ],
      kid: KIDS_MENU
    }
  },

  "youre-a-wizard-harry": {
    name: "You're A Wizard Harry!",
    page: "youre-a-wizard-harry.html",
    photo: "images/youre-a-wizard-harry.jpg",
    photoAlt: "Lovegood Radish Salad: shaved radish and cucumber with red cabbage and citrus zest",
    desc: "These foods from Hogwarts will make your Muggle tastebuds dance with magic!",
    tags: ["kid"],
    min: 399,
    prices: { kid: KID_PRICE },
    // Each dish has its own price, in the same order as the dishes below
    itemPrices: {
      en: [88, 84, 110],
      ap: [32, 32, 34],
      so: [32, 32, 32],
      sa: [32, 32, 32],
      de: [32, 32, 38]
    },
    courses: {
      en: [
        ["Chiddingly Hot Pot", "Eye-Roast | Olives | Tarragon Vinegar | Cloves | Potatoes | Glazed Carrots"],
        ["Bangers, Brussels, & Mash", "Ground Veal & Pork | Bread Crumbs | Lemon Zest | Sage | Marjoram | Mashed Potatoes | Onion Gravy | Béchamel Brussels"],
        ["Bouillabaisse", "Seasonal White Fish | Lobster Tail | Crabmeat | Shrimp | Clams | White Wine | Tomatoes | Clam Juice | Saffron | Herbed Crostinis"]
      ],
      ap: [
        ["Cornish Pasties", "Puff Pastry Tartlet | Chopped Chuck Steak | Potatoes | Caramelized Onion Jam"],
        ["Tri-Tournament Sausage Roll", "Puff Pastry | Sausage | Spicy Mustard | Red Pepper Relish"],
        ["Paddington Station Sliders", "Ground Sirloin | Tomato Sauce | Bread Crumbs | Sautéed Onions | English Mustard | Lettuce | Tomato | Brioche Bun"]
      ],
      so: [
        ["Irish Stew", "Lamb Chops Diced | Potatoes | Guinness"],
        ["Scotch Broth", "Chuck Eye | Barley | Turnip | Cabbage"],
        ["Cock-A-Leekie", "Roasted Chicken Thighs | Leeks | White Rice"]
      ],
      sa: [
        ["Lovegood Radish Salad", "Radishes | Cucumber | Red Onion | Radicchio | Dill Vinaigrette"],
        ["Gillyweed", "Seaweed | Cucumber | Calamari | Chili Garlic Sauce"],
        ["Hogwarts House Salad", "Seared Parsnips | Roasted Cherry Tomatoes | Roasted Red Beets | Asparagus | Shredded Rainbow Carrots | Blue Cheese Honey Vinaigrette"]
      ],
      de: [
        ["Harry's First Birthday Cake", "Chocolate Cake | Chocolate Glaze | Chocolate Frosting"],
        ["Almond Ginger Peach Treacle", "Almond Tart Crust | Peaches | Almonds | Ginger Syrup"],
        ["Pot De Butterbeer", "Butterscotch Cream | Butterbeer Cookies | Cream Soda Caramel | Toffee Sugar Nest"]
      ],
      kid: KIDS_MENU
    }
  },

  "health-is-wealth": {
    name: "Health is Wealth",
    page: "health-is-wealth.html",
    photo: "images/health-is-wealth.jpg",
    photoAlt: "Roasted acorn squash filled and topped with glazed shrimp, with roasted potatoes",
    desc: "Real food, real flavor, real intention. Built on clean ingredients and bold combinations, this menu fuels you with lean proteins, fiber-rich vegetables, and nutrient-dense ingredients.",
    tags: ["gf", "df"],
    min: 399,
    prices: {},
    // Each dish has its own price, in the same order as the dishes below
    itemPrices: {
      en: [68, 76, 68],
      ap: [32, 32, 32],
      so: [32, 32, 32],
      sa: [34, 34, 32],
      de: [30, 32, 35]
    },
    courses: {
      en: [
        ["Pep In Your Step", "Bell Peppers | Wild Rice | Ground Turkey | Arrabiata Coulis | Jarlsberg"],
        ["Chickens Out The Coop", "Airline Chicken Breast | Blood Orange Pan Sauce | Cauliflower Purée | Baby Bok Choy"],
        ["Mean Bean Lean Machine", "8 oz Black Bean Burger | Roasted Peppers | Onions | Ciabatta Bun | Romesco Sauce Aioli | Sweet Potato Fries | Brussel Sprouts | Sunburst Squash"]
      ],
      ap: [
        ["Power Up Shrooms", "Portobello | Lentils | Cabbage | Parmesano | Chives"],
        ["Cucupper Bites", "Cucumber Cups | Jalapeño & Caramelized Leeks Neufchatel Cheese | Oven Roasted Cherry Tomatoes | Yellow Pepper Coulis"],
        ["TomMoz", "Heirloom Tomatoes | Smoked Mozzarella | Herb Oil | Chiffonade Basil | Truffle Salt"]
      ],
      so: [
        ["Beef in the Barley", "Barley | Tenderloin | Spinach | Rainbow Carrots"],
        ["Vegetable Spa Day", "Roasted Tomato Soup | Charred Seasonal Vegetables | Smoked Corn | Roasted Baby Potatoes | Micro Arugula"],
        ["Squish Squash", "Roasted Acorn Squash | Butternut Squash | Grilled Corn | Shaved Brussel Sprouts | Almond Milk | Avocado"]
      ],
      sa: [
        ["What-A-Melon", "Midori Infused Watermelon | Garlicky Herbed Heirlooms | Purple Haze Goat Cheese | Parmesan Crusted Pistachios | Kale | Spicy Dijon Vinaigrette"],
        ["Super Sayan Salad", "Super Greens Mix | Turmeric Ginger Poached Pears | Roasted Sweet Potato | Avocado | Five Spice Candied Walnuts | Blood Orange, Black Garlic & Miso Vinaigrette"],
        ["Just Beet It", "Arugula | Roasted Beets | Toasted Almonds | Feta | Cherry Tomatoes | Pomegranate Balsamic"]
      ],
      de: [
        ["Berry Bayon", "Fresh Berries | Sabayon | Lime Twill | Mint"],
        ["Lemon & Oil", "Olive Oil Cake | Preserved Lemons | Lemon Glaze | Lemon Balm Bite"],
        ["Raspy White Cloud's", "Raspberry Short Cake | Mint Glaze | White Chocolate Buttercream | Raspberry Rum Sauce"]
      ]
    }
  },

  "medi-food-retreat": {
    name: "Medi Food Retreat",
    page: "medi-food-retreat.html",
    photo: "images/medi-food-retreat.jpg",
    photoAlt: "The Risotto Of The Lamb: lamb chops with glazed carrots and demi glace",
    desc: "Inspired by the sun-soaked coasts and rich traditions of the Mediterranean. This menu highlights fresh ingredients, bold herbs, and a refined approach.",
    tags: ["vg", "gf", "kid"],
    min: 399,
    prices: { kid: KID_PRICE },
    // Each dish has its own price, in the same order as the dishes below
    itemPrices: {
      en: [84, 98, 84],
      ap: [38, 37, 32],
      so: [32, 32, 30],
      sa: [34, 32, 34],
      de: [33, 35, 34]
    },
    courses: {
      en: [
        ["Medi Clucking Coust", "Mediterranean Stewed Chicken Breast | Couscous | Patty Squash & Broccolini", ["gf", "df", "sf", "pf"]],
        ["The Risotto Of The Lamb", "Grilled Lamb Chops | Mint Demi Glacé | Wild Mushroom Risotto | Asparagus", ["gf", "df", "sf", "pf", "tnf"]],
        ["Chili Night Comfort", "Chili Shrimp | Linguine | Maître de Butter | Roasted Acorn Squash & Sweet Potato", ["df", "pf"]]
      ],
      ap: [
        ["Coliseum Platter", "Baba Ghanoush | Hummus | Kalamatas | Feta Clouds | Apricot Jam | Rainbow Carrots | Pita Chips"],
        ["Barrí Crustinis", "Parmesano & Herb Crusted Pork Tenderloin | Crustinis | Roasted Red Pepper Jam | Whipped Goat Cheese | Fig Glaze | Mint"],
        ["AcroPEARlis", "Red Wine Poached Pears | Torched Brie | Spiced Walnuts | Balsamic Honey | Basil"]
      ],
      so: [
        ["Pantheon Bean Bowl", "Cannellini Beans | Charred Broccoli | Tomato Broth | Asparagus Tips | Fresh Parmesan"],
        ["Toasty Roasty Lentils", "Lentils | Roasted Vegetable Stock | Spinach | Roasted Vegetables | Fried Basil"],
        ["Chicken, Peas Don't Choke", "Charred Chicken Thighs | Chickpeas | Artichoke Hearts | Kale | Roasted Red Peppers | Chicken Skin Croutons"]
      ],
      sa: [
        ["Truffed Out", "Herbed Heirlooms | Lemon Ricotta | Arugula | Figs | Basil & White Truffle Oil | Balsamic Glaze"],
        ["Roman Cumbersome Forum", "Cucumber | Kalamatas | Cherry Tomatoes | Whipped Goat Cheese | Red Wine Vinegar Gastrique"],
        ["Quin to the Oa", "Tri-Colored Quinoa | Tabbouleh | Grilled Lemon | Feta | Flatbread Croutons | Roasted Garlic & Herb Vinaigrette"]
      ],
      de: [
        ["Palantine Cherry Hill", "Cherry Clafoutis | Lemon Goat Cheese Chantilly Foam | Mint and Basil Syrup | Candied Lemon Peel"],
        ["Bak Up, Lava", "Baklava | Ginger Gastrique | Honey Pistachio Ice Cream"],
        ["Loukoumades", "Greek Donuts | Walnut Sugar | Sweet Spicy Honey | Chocolate & Caramel Dips"]
      ],
      kid: KIDS_MENU
    }
  },

  /* Prix fixe: one price per adult covers every course listed. */
  "rise-and-shine": {
    name: "Rise And Shine",
    page: "rise-and-shine.html",
    photo: "images/rise-and-shine.jpg",
    photoAlt: "Fruit plates with sliced apple, melon and granola",
    desc: "A slow, indulgent start to the day, featuring thoughtfully prepared dishes made fresh on-site and served with effortless grace. Each bite is balanced and comforting, inviting guests to linger, savor, and ease into the moment.",
    tags: ["vg", "sf", "pf", "gf", "df", "kid"],
    min: 399,
    prixFixe: 199.99,
    prices: { kid: KID_PRICE },
    courses: {
      en: [
        ["Sunny Side Of the Lawn", "Smoked Brisket | Collard Greens | Manchego Grits | Sunnyside Eggs | Crispy Shallots", ["sf", "pf", "tnf", "gf"]],
        ["Foundation For Success", "Maple Infused Pancakes Or Waffles | Sweet N Smokey Ham | Eggs (How You Want Them) | Roasted Root Veg | Sliced Pan Fried Potatoes", ["tnf", "sf", "pf", "df"]],
        ["Benedict Gobbler", "Smashed Crispy Plantain W/ Avocado Slices | Sauteed Spinach | Turkey Bacon | Hollandaise Foam | Poached Egg | Pickled Shallots | Fine Chives", ["pf", "tnf", "sf"]]
      ],
      sa: [
        ["Get Started Parfait", "Fresh Vanilla Yogurt | Quinoa Chocolate Granola | Fresh and Dried Seasonal Fruits | Citrus Honey Glaze (dressing)", ["gf", "tnf", "sf", "pf"]],
        ["Fruity Tooty", "Melon | Berries | Mango | Pineapple | Honey Rum Sauce | Pistachio Mint Dust", ["df", "gf", "sf", "vg"]],
        ["Apple a Day", "Super Greens Mix (Baby Kale, Arugula) | Jicama | Honey Crisp Apple | Spiced Citrus Candied Pecans | Sun Dried Tomato Feta | Lemon Honey Vinaigrette (Chipotle Option For Heat)", ["vg", "df", "gf", "sf"]]
      ],
      de: [
        ["Wake Up and Smell the Coffee", "Coffee Carrot Zucchini Cake | Citrus Ricotta | Creme Anglaise", ["tnf", "sf", "pf", "vg"]],
        ["Tirango", "Mango Soaked Lady Fingers | Cream Of Coconut Mascarpone Cream | Mango Jelly | Fresh Mango | Freeze Dried Mango Dust with Shaved White Chocolate | Mango Rum, Basil, Mint Granita", ["sf", "vg", "pf"]],
        ["Sunshine In a Spoon", "Pineapple Coconut Custard | Prosecco | Fresh Pineapple | Toasted Coconut Flakes W/ Lime Zest", ["pf", "sf"]]
      ],
      kid: KIDS_MENU
    }
  },

  "rise-and-shine-breakfast": {
    name: "Rise and Shine Breakfast",
    page: "rise-and-shine-breakfast.html",
    photo: "images/rise-and-shine-breakfast.jpg",
    photoAlt: "Sticks of Joy: brioche French toast sticks with bananas foster and whipped cream",
    desc: "They say the most important meal of the day is breakfast. So get the daily grind started right with this delight!",
    tags: [],
    min: 399,
    prices: {},
    // Each dish has its own price, in the same order as the dishes below
    itemPrices: {
      en: [75, 85, 78],
      ap: [32, 34, 32],
      so: [32, 34, 32],
      sa: [32, 32, 34],
      de: [36, 40, 34]
    },
    courses: {
      en: [
        ["Foundation For Success", "Maple Infused Pancakes or Waffles | Sweet N Smokey Ham | Eggs (Made To Order) | Sliced Pan Fried Potatoes | Roasted Root Vegetables"],
        ["Sunny Side Of the Lawn", "Manchego Grits | Collard Greens | Smoked Brisket | Sunnyside Eggs | Crispy Shallots"],
        ["Benedict Gobbler", "Smashed Crispy Plantains | Avocado Slices | Sauteed Spinach | Turkey Bacon | Hollandaise Foam | Poached Egg | Pickled Shallots | Chives"]
      ],
      ap: [
        ["Sticks of Joy", "Thick Cut Brioche | Cinnamon Mocha Custard | Banana Foster | Whip Cream"],
        ["Smashocado Toast", "Crispy Brioche | Smashed Avocado | Roasted Peppers | Caramelized Onions | Arugula"],
        ["Eggcellent Cottage Cups", "Whipped Cottage Cheese Egg Whites | Fresh Berry Compote | Honey Comb | Mint"]
      ],
      so: [
        ["Piggy's Potato", "Thick Cut Applewood Bacon | Diced Yukon Potatoes | Roasted Garlic Leek Broth | Jalapeño | Cheddar"],
        ["Basil Pool and Chz Floaties", "Rich Charred Tomato Puree | Basil Pesto (Pine Nut Free) | Roasted Garlic Oil | Grilled Cheese Croutons"],
        ["Strawnana Pancho (gazpacho)", "Pickled Strawberry Puree | Frozen Banana Puree | Tropical Honey Sauce | Ginger Mint Infused Oat Cream | Citrus Zest"]
      ],
      sa: [
        ["Fruity Tooty", "Melon | Berries | Mango | Pineapple | Honey Rum Sauce | Pistachio Mint Dust"],
        ["Get Started Parfait", "House Made Yogurt | Quinoa Granola | Dried & Fresh Seasonal Fruit | Citrus Honey Glaze"],
        ["Apple a Day", "Super Greens Mix (Baby Kale, Arugula) | Jicama | Honey Crisp Apple | Spiced Citrus Candied Pecans | Sun Dried Tomato Feta | Lemon Honey Vinaigrette (Chipotle Option For Heat)"]
      ],
      de: [
        ["Wake up and Smell the Coffee", "Coffee Carrot Zucchini Cake | Lemon-Orange Ricotta | Crème Anglaise"],
        ["Tirango", "Mango Soaked Lady Fingers | Cream Of Coconut Mascarpone Cream | Mango Jelly | Fresh Mango | Freeze Dried Mango Dust | Shaved White Chocolate | Mango Rum, Basil, Mint Granita"],
        ["Sunshine In a Spoon", "Pineapple Coconut Custard | Prosecco with Lime Juice | Fresh Pineapple | Toasted Coconut Flakes | Lime Zest"]
      ]
    }
  },

  /* Holiday menu */
  "home-for-the-holidaze": {
    name: "Home for the Holidaze?",
    page: "home-for-the-holidaze.html",
    photo: "images/home-for-the-holidaze.jpg",
    photoAlt: "Vanilla bean custard with caramel, hazelnut crumble and crème anglaise",
    desc: "A collection of holiday classics and rich, comforting flavors, built on tradition with flavors that feel like home.",
    tags: ["kid"],
    min: 399,
    prices: { kid: KID_PRICE },
    // Each dish has its own price, in the same order as the dishes below
    itemPrices: {
      en: [110, 88, 92],
      ap: [38, 42, 34],
      so: [40, 36, 32],
      sa: [40, 34, 38],
      de: [38, 34, 36]
    },
    courses: {
      en: [
        ["Prime Rib Roasting On An Open Fire", "Smoked Prime Rib | Roasted Tomato au Jus | 4 Cheese Macaroni | Roasted Sweet Potatoes | Garlicky Green Beans"],
        ["Gobble It Up", "Citrus Herb, Garlic Turkey | Hamhock Stuffing | Giblet Gravy | Smashed Potatoes | Collard Greens"],
        ["You're such a Ham", "Bourbon Smoked Ham | Smokey Maple Glaze | Cauliflower Purée | Roasted Brussels | Roasted Baby Potatoes & Carrots"]
      ],
      ap: [
        ["Board of Dreams", "Dried Meats | Premium Cheese | Fruit Jelly | Stone Ground Mustard | Crackers | Roasted Mixed Nuts"],
        ["Just Keep Swimming", "3 U10 Shrimp | Cocktail Gastrique | Arugula | Lemon Zest"],
        ["Squash The Squabbles", "Herbed Crostinis | Roasted Squash | Cranberry & Cinnamon Jam | Roasted Garlic Walnuts | Prosciutto"]
      ],
      so: [
        ["Chedduh Bay", "Cajun Shrimp | Butter Garlic Scallops | Smoked Cheddar | Grilled Ciabatta"],
        ["Grandma's Dumplings", "Charred & Braised Chicken Halves | Herb Infused Dumplings | Roasted Chicken Broth | Seasonal Veggies"],
        ["Pot of Leek", "Roasted Potato Purée | Roasted Vegetable Broth | Caramelized Leeks | Roasted Yellow Beets | Scallions"]
      ],
      sa: [
        ["Or zo, It's Not a Salad?", "Orzo Pasta | Caramel Pecans | Feta | Cherry Tomatoes | Cranberry | Poached Pears | Roasted Garlic Sage Vinaigrette"],
        ["Your Majesty", "Spring Mix | Arugula | Seasonal Garden Vegetables | Roasted Garlic Croutons | Orange Supremes | Fried Shallots | Citrus Cranberry Vinaigrette or Green Goddess"],
        ["Honeycrisp on a Silent Night", "Frisée & Endive | Shaved Honeycrisp Apples | Spiced Candied Walnuts | Brie | Spiced Ginger Vinaigrette"]
      ],
      de: [
        ["Layers of Pumpkin", "Cinnamon Sugar Graham Cracker Crust | Vanilla Bean Cheesecake | Pumpkin Cheesecake | Allspice Chantilly"],
        ["Pumpkin Patch", "Spiced Pie Dough | Fresh Pumpkin Pie Filling | Chai Anglaise"],
        ["Apple of My Eye", "Fresh Apple Pie | House Made Bourbon Vanilla Bean Ice Cream | Caramel Whip Cream"]
      ],
      kid: KIDS_MENU
    }
  }
};

/* Price of one dish: its own price if the menu lists one, otherwise the course price */
function dishPrice(m, course, i) {
  var ip = m.itemPrices && m.itemPrices[course];
  return ip && ip[i] != null ? ip[i] : (m.prices || {})[course];
}
/* Lowest entree price, for "Entrees from $..." */
function entreeFrom(m) {
  var ip = m.itemPrices && m.itemPrices.en;
  return ip ? Math.min.apply(null, ip) : m.prices.en;
}
