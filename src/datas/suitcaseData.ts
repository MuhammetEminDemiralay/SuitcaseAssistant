
interface DynamicObject {
    [key: string]: any; // Anahtar olarak herhangi bir string alabilir ve değer olarak herhangi bir türde olabilir.
}
export const suitcaseDatas: DynamicObject = {


    male: {
        sea: {
            clothing: [
                { item: "Swim trunks", check: false },
                { item: "T-shirts", check: false },
                { item: "Colorful shirts", check: false },
                { item: "Shorts", check: false },
                { item: "Swim shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Hat", check: false },
                { item: "Light jacket", check: false },
                { item: "Sunglasses", check: false },
                { item: "Beach bag", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false },
                { item: "Sunscreen", check: false }
            ],
            personal_care: [
                { item: "Sunscreen", check: false },
                { item: "Moisturizer", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Sunglasses", check: false },
                { item: "Hat", check: false },
                { item: "Beach towel", check: false },
                { item: "Waterproof phone case", check: false }
            ]
        },
        nature: {
            clothing: [
                { item: "Thermal base layers", check: false },
                { item: "Fleece jacket", check: false },
                { item: "Windbreaker", check: false },
                { item: "Hiking pants", check: false },
                { item: "Hiking shorts", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Glasses", check: false }
            ],
            food_and_drink: [
                { item: "Energy bars", check: false },
                { item: "Nuts", check: false },
                { item: "Cooking set", check: false },
                { item: "Water bottle", check: false },
                { item: "Camp coffee maker", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Insect repellent", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GPS device", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Insect bite cream", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Insurance documents", check: false },
                { item: "Camp reservation details", check: false },
                { item: "Map and compass", check: false }
            ],
            equipment: [
                { item: "Tent", check: false },
                { item: "Sleeping bag", check: false },
                { item: "Sleeping pad", check: false },
                { item: "Camp stove", check: false },
                { item: "Backpack", check: false },
                { item: "Flashlight", check: false },
                { item: "Tent repair kit", check: false }
            ]
        },
        culture: {
            clothing: [
                { item: "Casual shirts", check: false },
                { item: "T-shirts", check: false },
                { item: "Smart jacket", check: false },
                { item: "Pants", check: false },
                { item: "Shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Smart coat", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Glasses", check: false },
                { item: "Jewelry", check: false }
            ],
            food_and_drink: [
                { item: "Local snacks", check: false },
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Extra memory cards", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "City map", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ]
        },
        city: {
            clothing: [
                { item: "T-shirts", check: false },
                { item: "Shirts", check: false },
                { item: "Smart jackets", check: false },
                { item: "Pants", check: false },
                { item: "Shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Raincoat", check: false },
                { item: "Smart coat", check: false },
                { item: "Hat", check: false },
                { item: "Glasses", check: false },
                { item: "Jewelry", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Cafe or restaurant meals", check: false },
                { item: "Snacks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Extra memory cards", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "City map", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ]
        },
        camp: {
            clothing: [
                { item: "Fleece jacket", check: false },
                { item: "Thermal base layers", check: false },
                { item: "Windbreaker", check: false },
                { item: "Camping pants", check: false },
                { item: "Hiking shorts", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Glasses", check: false }
            ],
            food_and_drink: [
                { item: "Energy bars", check: false },
                { item: "Nuts", check: false },
                { item: "Cooking set", check: false },
                { item: "Water bottle", check: false },
                { item: "Camp coffee maker", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Insect repellent", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GPS device", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Insect bite cream", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Insurance documents", check: false },
                { item: "Camp reservation details", check: false },
                { item: "Map and compass", check: false }
            ],
            equipment: [
                { item: "Tent", check: false },
                { item: "Sleeping bag", check: false },
                { item: "Sleeping pad", check: false },
                { item: "Camp stove", check: false },
                { item: "Backpack", check: false },
                { item: "Flashlight", check: false },
                { item: "Tent repair kit", check: false }
            ]
        },
        ski: {
            clothing: [
                { item: "Ski jacket", check: false },
                { item: "Thermal base layers", check: false },
                { item: "Fleece jacket", check: false },
                { item: "Ski pants", check: false },
                { item: "Thermal leggings", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof gloves", check: false },
                { item: "Ski hat", check: false },
                { item: "Ski goggles", check: false },
                { item: "Neck gaiter", check: false },
                { item: "Ski socks", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Energy bars", check: false },
                { item: "Hot drinks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GoPro", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Cold remedies", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Ski pass", check: false },
                { item: "Hotel reservation details", check: false }
            ],
            equipment: [
                { item: "Ski equipment", check: false },
                { item: "Ski poles", check: false },
                { item: "Helmet", check: false },
                { item: "Ski boots", check: false }
            ]
        },
    },


    female: {
        sea: {
            clothing: [
                { item: "Swimwear", check: false },
                { item: "T-shirts", check: false },
                { item: "Colorful shirts", check: false },
                { item: "Tank tops", check: false },
                { item: "Rash guard", check: false },
                { item: "Shorts", check: false },
                { item: "Swim shorts", check: false },
                { item: "Beach pants", check: false }, // Ekstra
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Hat", check: false },
                { item: "Light jacket", check: false },
                { item: "Rain poncho", check: false }, // Ekstra
                { item: "Sunglasses", check: false },
                { item: "Beach bag", check: false },
                { item: "Beach towel", check: false }, // Ekstra
                { item: "Waterproof phone case", check: false } // Ekstra
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false },
                { item: "Sunscreen", check: false },
                { item: "Snacks", check: false } // Ekstra
            ],
            personal_care: [
                { item: "Sunscreen", check: false },
                { item: "Moisturizer", check: false },
                { item: "After-sun lotion", check: false }, // Ekstra
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Hairbrush", check: false }, // Ekstra
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Wet wipes", check: false }, // Ekstra
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false },
                { item: "Aftershave", check: false } // Ekstra
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false },
                { item: "Waterproof phone case", check: false } // Ekstra
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Antiseptic wipes", check: false } // Ekstra
            ],
            documents: [
                { item: "ID", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Sunglasses", check: false },
                { item: "Hat", check: false },
                { item: "Beach towel", check: false },
                { item: "Waterproof phone case", check: false }
            ]
        },
        nature: {
            clothing: [
                { item: "Thermal base layers", check: false },
                { item: "Fleece jacket", check: false },
                { item: "Windbreaker", check: false },
                { item: "Hiking pants", check: false },
                { item: "Hiking shorts", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Glasses", check: false }
            ],
            food_and_drink: [
                { item: "Energy bars", check: false },
                { item: "Nuts", check: false },
                { item: "Cooking set", check: false },
                { item: "Water bottle", check: false },
                { item: "Camp coffee maker", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Insect repellent", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GPS device", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Insect bite cream", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Insurance documents", check: false },
                { item: "Camp reservation details", check: false },
                { item: "Map and compass", check: false }
            ],
            equipment: [
                { item: "Tent", check: false },
                { item: "Sleeping bag", check: false },
                { item: "Sleeping pad", check: false },
                { item: "Camp stove", check: false },
                { item: "Backpack", check: false },
                { item: "Flashlight", check: false },
                { item: "Tent repair kit", check: false }
            ]
        },
        culture: {
            clothing: [
                { item: "Casual shirts", check: false },
                { item: "T-shirts", check: false },
                { item: "Smart jacket", check: false },
                { item: "Pants", check: false },
                { item: "Shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Smart coat", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Glasses", check: false },
                { item: "Jewelry", check: false }
            ],
            food_and_drink: [
                { item: "Local snacks", check: false },
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Extra memory cards", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "City map", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ]
        },
        city: {
            clothing: [
                { item: "T-shirts", check: false },
                { item: "Shirts", check: false },
                { item: "Smart jackets", check: false },
                { item: "Pants", check: false },
                { item: "Shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Raincoat", check: false },
                { item: "Smart coat", check: false },
                { item: "Hat", check: false },
                { item: "Glasses", check: false },
                { item: "Jewelry", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Cafe or restaurant meals", check: false },
                { item: "Snacks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Extra memory cards", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "City map", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ]
        },
        camp: {
            clothing: [
                { item: "Fleece jacket", check: false },
                { item: "Thermal base layers", check: false },
                { item: "Windbreaker", check: false },
                { item: "Camping pants", check: false },
                { item: "Hiking shorts", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Glasses", check: false }
            ],
            food_and_drink: [
                { item: "Energy bars", check: false },
                { item: "Nuts", check: false },
                { item: "Cooking set", check: false },
                { item: "Water bottle", check: false },
                { item: "Camp coffee maker", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Insect repellent", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GPS device", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Insect bite cream", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Insurance documents", check: false },
                { item: "Camp reservation details", check: false },
                { item: "Map and compass", check: false }
            ],
            equipment: [
                { item: "Tent", check: false },
                { item: "Sleeping bag", check: false },
                { item: "Sleeping pad", check: false },
                { item: "Camp stove", check: false },
                { item: "Backpack", check: false },
                { item: "Flashlight", check: false },
                { item: "Tent repair kit", check: false }
            ]
        },
        ski: {
            clothing: [
                { item: "Ski jacket", check: false },
                { item: "Thermal base layers", check: false },
                { item: "Fleece jacket", check: false },
                { item: "Ski pants", check: false },
                { item: "Thermal leggings", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Ski socks", check: false },
                { item: "Ski gloves", check: false },
                { item: "Winter hat", check: false },
                { item: "Ski goggles", check: false },
                { item: "Ski helmet", check: false },
                { item: "Neck gaiter", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false },
                { item: "Snacks", check: false },
                { item: "Thermos", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Lip balm", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Thermal blanket", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Ski pass", check: false },
                { item: "Insurance documents", check: false }
            ],
            equipment: [
                { item: "Ski poles", check: false },
                { item: "Ski boots", check: false },
                { item: "Snow boots", check: false },
                { item: "Ski bag", check: false }
            ]
        }
    },


    couple: {
        sea: {
            clothing: [
                { item: "Swimwear", check: false },
                { item: "T-shirts", check: false },
                { item: "Colorful shirts", check: false },
                { item: "Tank tops", check: false },
                { item: "Rash guard", check: false },
                { item: "Shorts", check: false },
                { item: "Swim shorts", check: false },
                { item: "Beach pants", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Hat", check: false },
                { item: "Light jacket", check: false },
                { item: "Rain poncho", check: false },
                { item: "Sunglasses", check: false },
                { item: "Beach bag", check: false },
                { item: "Beach towel", check: false },
                { item: "Waterproof phone case", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false },
                { item: "Sunscreen", check: false },
                { item: "Snacks", check: false }
            ],
            personal_care: [
                { item: "Sunscreen", check: false },
                { item: "Moisturizer", check: false },
                { item: "After-sun lotion", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Hairbrush", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Wet wipes", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false },
                { item: "Aftershave", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false },
                { item: "Waterproof phone case", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Antiseptic wipes", check: false }
            ],
            documents: [
                { item: "ID", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Sunglasses", check: false },
                { item: "Hat", check: false },
                { item: "Beach towel", check: false },
                { item: "Waterproof phone case", check: false }
            ]
        },
        nature: {
            clothing: [
                { item: "Thermal base layers", check: false },
                { item: "Fleece jacket", check: false },
                { item: "Windbreaker", check: false },
                { item: "Hiking pants", check: false },
                { item: "Hiking shorts", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Glasses", check: false }
            ],
            food_and_drink: [
                { item: "Energy bars", check: false },
                { item: "Nuts", check: false },
                { item: "Cooking set", check: false },
                { item: "Water bottle", check: false },
                { item: "Camp coffee maker", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Insect repellent", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GPS device", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Insect bite cream", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Insurance documents", check: false },
                { item: "Camp reservation details", check: false },
                { item: "Map and compass", check: false }
            ],
            equipment: [
                { item: "Tent", check: false },
                { item: "Sleeping bag", check: false },
                { item: "Sleeping pad", check: false },
                { item: "Camp stove", check: false },
                { item: "Backpack", check: false },
                { item: "Flashlight", check: false },
                { item: "Tent repair kit", check: false }
            ]
        },
        culture: {
            clothing: [
                { item: "Casual shirts", check: false },
                { item: "T-shirts", check: false },
                { item: "Smart jackets", check: false },
                { item: "Pants", check: false },
                { item: "Shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Smart coat", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Glasses", check: false },
                { item: "Jewelry", check: false }
            ],
            food_and_drink: [
                { item: "Local snacks", check: false },
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Extra memory cards", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "City map", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ]
        },
        city: {
            clothing: [
                { item: "T-shirts", check: false },
                { item: "Shirts", check: false },
                { item: "Smart jackets", check: false },
                { item: "Pants", check: false },
                { item: "Shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Raincoat", check: false },
                { item: "Smart coat", check: false },
                { item: "Hat", check: false },
                { item: "Glasses", check: false },
                { item: "Jewelry", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Cafe or restaurant meals", check: false },
                { item: "Snacks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Extra memory cards", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "City map", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ]
        },
        camp: {
            clothing: [
                { item: "Fleece jacket", check: false },
                { item: "Thermal base layers", check: false },
                { item: "Windbreaker", check: false },
                { item: "Camping pants", check: false },
                { item: "Hiking shorts", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Glasses", check: false }
            ],
            food_and_drink: [
                { item: "Energy bars", check: false },
                { item: "Nuts", check: false },
                { item: "Cooking set", check: false },
                { item: "Water bottle", check: false },
                { item: "Camp coffee maker", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Insect repellent", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GPS device", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Insect bite cream", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Insurance documents", check: false },
                { item: "Camp reservation details", check: false },
                { item: "Map and compass", check: false }
            ],
            equipment: [
                { item: "Tent", check: false },
                { item: "Sleeping bag", check: false },
                { item: "Sleeping pad", check: false },
                { item: "Camp stove", check: false },
                { item: "Backpack", check: false },
                { item: "Flashlight", check: false },
                { item: "Tent repair kit", check: false }
            ]
        },
        ski: {
            clothing: [
                { item: "Thermal base layers", check: false },
                { item: "Fleece jacket", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Ski pants", check: false },
                { item: "Thermal leggings", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Ski socks", check: false },
                { item: "Ski gloves", check: false },
                { item: "Winter hat", check: false },
                { item: "Ski goggles", check: false },
                { item: "Ski helmet", check: false },
                { item: "Neck gaiter", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false },
                { item: "Snacks", check: false },
                { item: "Thermos", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Lip balm", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Thermal blanket", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Ski pass", check: false },
                { item: "Insurance documents", check: false }
            ],
            equipment: [
                { item: "Ski poles", check: false },
                { item: "Ski boots", check: false },
                { item: "Snow boots", check: false },
                { item: "Ski bag", check: false }
            ]
        }
    },


    family:
    {
        sea: {
            clothing: [
                { item: "Swimwear", check: false },
                { item: "T-shirts", check: false },
                { item: "Colorful shirts", check: false },
                { item: "Tank tops", check: false },
                { item: "Rash guard", check: false },
                { item: "Shorts", check: false },
                { item: "Swim shorts", check: false },
                { item: "Beach pants", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Hat", check: false },
                { item: "Light jacket", check: false },
                { item: "Rain poncho", check: false },
                { item: "Sunglasses", check: false },
                { item: "Beach bag", check: false },
                { item: "Beach towel", check: false },
                { item: "Waterproof phone case", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false },
                { item: "Sunscreen", check: false },
                { item: "Snacks", check: false }
            ],
            personal_care: [
                { item: "Sunscreen", check: false },
                { item: "Moisturizer", check: false },
                { item: "After sun lotion", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Hairbrush", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Wet wipes", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false },
                { item: "Aftershave", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false },
                { item: "Waterproof phone case", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Antiseptic wipes", check: false }
            ],
            documents: [
                { item: "ID", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Sunglasses", check: false },
                { item: "Hat", check: false },
                { item: "Beach towel", check: false },
                { item: "Waterproof phone case", check: false }
            ]
        },
        nature: {
            clothing: [
                { item: "Thermal base layers", check: false },
                { item: "Fleece jacket", check: false },
                { item: "Windbreaker", check: false },
                { item: "Hiking pants", check: false },
                { item: "Hiking shorts", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Glasses", check: false }
            ],
            food_and_drink: [
                { item: "Energy bars", check: false },
                { item: "Nuts", check: false },
                { item: "Cooking set", check: false },
                { item: "Water bottle", check: false },
                { item: "Camp coffee maker", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Insect repellent", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GPS device", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Insect bite cream", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Insurance documents", check: false },
                { item: "Camp reservation details", check: false },
                { item: "Map and compass", check: false }
            ],
            equipment: [
                { item: "Tent", check: false },
                { item: "Sleeping bag", check: false },
                { item: "Sleeping pad", check: false },
                { item: "Camp stove", check: false },
                { item: "Backpack", check: false },
                { item: "Flashlight", check: false },
                { item: "Tent repair kit", check: false }
            ]
        },
        culture: {
            clothing: [
                { item: "Casual shirts", check: false },
                { item: "T-shirts", check: false },
                { item: "Smart jackets", check: false },
                { item: "Pants", check: false },
                { item: "Shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Smart coat", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Glasses", check: false },
                { item: "Jewelry", check: false }
            ],
            food_and_drink: [
                { item: "Local snacks", check: false },
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Extra memory cards", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "City map", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ]
        },
        city: {
            clothing: [
                { item: "T-shirts", check: false },
                { item: "Shirts", check: false },
                { item: "Smart jackets", check: false },
                { item: "Pants", check: false },
                { item: "Shorts", check: false },
                { item: "Underwear", check: false },
                { item: "Socks", check: false },
                { item: "Raincoat", check: false },
                { item: "Smart coat", check: false },
                { item: "Hat", check: false },
                { item: "Glasses", check: false },
                { item: "Jewelry", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Cafe or restaurant meals", check: false },
                { item: "Snacks", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Extra memory cards", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "City map", check: false },
                { item: "Hotel reservation details", check: false },
                { item: "Flight tickets", check: false }
            ],
            equipment: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ]
        },
        camp: {
            clothing: [
                { item: "Fleece jacket", check: false },
                { item: "Thermal base layers", check: false },
                { item: "Windbreaker", check: false },
                { item: "Camping pants", check: false },
                { item: "Hiking shorts", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Raincoat", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Glasses", check: false }
            ],
            food_and_drink: [
                { item: "Energy bars", check: false },
                { item: "Nuts", check: false },
                { item: "Cooking set", check: false },
                { item: "Water bottle", check: false },
                { item: "Camp coffee maker", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Insect repellent", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "GPS device", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Insect bite cream", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Insurance documents", check: false },
                { item: "Camp reservation details", check: false },
                { item: "Map and compass", check: false }
            ],
            equipment: [
                { item: "Tent", check: false },
                { item: "Sleeping bag", check: false },
                { item: "Sleeping pad", check: false },
                { item: "Camp stove", check: false },
                { item: "Backpack", check: false },
                { item: "Flashlight", check: false },
                { item: "Tent repair kit", check: false }
            ]
        },
        ski: {
            clothing: [
                { item: "Thermal base layers", check: false },
                { item: "Fleece jacket", check: false },
                { item: "Windbreaker", check: false },
                { item: "Ski pants", check: false },
                { item: "Thermal underwear", check: false },
                { item: "Ski socks", check: false },
                { item: "Waterproof jacket", check: false },
                { item: "Insulated jacket", check: false },
                { item: "Hat", check: false },
                { item: "Gloves", check: false },
                { item: "Ski goggles", check: false }
            ],
            food_and_drink: [
                { item: "Water bottle", check: false },
                { item: "Energy drinks", check: false },
                { item: "Snacks", check: false },
                { item: "Thermos", check: false }
            ],
            personal_care: [
                { item: "Moisturizer", check: false },
                { item: "Sunscreen", check: false },
                { item: "Lip balm", check: false },
                { item: "Shampoo", check: false },
                { item: "Conditioner", check: false },
                { item: "Toothpaste", check: false },
                { item: "Toothbrush", check: false },
                { item: "Deodorant", check: false },
                { item: "Razor", check: false },
                { item: "Shaving cream", check: false }
            ],
            electronics: [
                { item: "Phone", check: false },
                { item: "Charger", check: false },
                { item: "Camera", check: false },
                { item: "Portable charger", check: false }
            ],
            health_and_first_aid: [
                { item: "First aid kit", check: false },
                { item: "Pain relievers", check: false },
                { item: "Bandages", check: false },
                { item: "Thermal blanket", check: false }
            ],
            documents: [
                { item: "ID and passport", check: false },
                { item: "Ski pass", check: false },
                { item: "Insurance documents", check: false }
            ],
            equipment: [
                { item: "Ski poles", check: false },
                { item: "Ski boots", check: false },
                { item: "Snow boots", check: false },
                { item: "Ski bag", check: false }
            ]
        }
    }
};