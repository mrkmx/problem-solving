/**
 * 1
 */
function analyzeUsers(users) {
    const purchasedFreq = new Map()
    
    const total = users.reduce((acc, user) => {
        acc.age += user.age
        user.purchases.forEach((p) => {
            purchasedFreq.set(p.item, (purchasedFreq.get(p.item) || 0) + 1)
            acc.spent += p.amount
        }, 0)
            
        return acc
    }, {age: 0, spent: 0})

    const result = {
        totalUsers: users.length,
        averageAge: total.age / users.length,
        totalSpent: total.spent,
        mostPurchasedItem: findMostFrequent(purchasedFreq)
    }

    return result
}
function findMostFrequent(freqMap) {
    let maxCount = 0
    let mostFrequent
    freqMap.forEach((value, key) => {
        if (value > maxCount) {
            maxCount = value
            mostFrequent = key
        }
    })
    return mostFrequent
}
const users = [
    {
      name: "Alice",
      age: 28,
      purchases: [
        { item: "book", amount: 15 },
        { item: "pen", amount: 2 }
      ]
    },
    {
      name: "Bob",
      age: 34,
      purchases: [
        { item: "notebook", amount: 20 },
        { item: "book", amount: 15 },
        { item: "pen", amount: 3 }
      ]
    },
    {
      name: "Charlie",
      age: 22,
      purchases: [
        { item: "backpack", amount: 45 },
        { item: "book", amount: 10 },
        
      ]
    }
];
/**
 * {
 *   totalUsers: 3,
 *   averageAge: 28,
 *   totalSpent: 110,
 *   mostPurchasedItem: "book"
 * }
 */
// console.log(analyzeUsers(users));

/**
 * 2
 */
function groupByCategory(products) {
    const result = {}
    products.forEach(({category, name}) => {
        result[category] ? result[category].push(name) : result[category] = [name]
    })
    return result
}
const products = [
    { name: "Apple", category: "Fruits", quantity: 10, price: 2 },
    { name: "Banana", category: "Fruits", quantity: 5, price: 1 },
    { name: "Carrot", category: "Vegetables", quantity: 7, price: 1.5 },
    { name: "Broccoli", category: "Vegetables", quantity: 3, price: 2.5 }
];
/**
 * {
 *   Fruits: ["Apple", "Banana"],
 *   Vegetables: ["Carrot", "Broccoli"
 * }
 */
// console.log(groupByCategory(products))

/**
 * 3
 */
function averageGrades(students) {
    const total = students.reduce((acc, {grades}) => {
        acc.math += grades.math
        acc.english += grades.english
        return acc
    }, {math: 0, english: 0})

    return {
        math: total.math / students.length,
        english: total.english / students.length
    }
}
const students = [
    { name: "Alice", grades: { math: 90, english: 85 } },
    { name: "Bob", grades: { math: 70, english: 75 } },
    { name: "Charlie", grades: { math: 80, english: 95 } }
];
/**
 * {
 *   math: 80,
 *   english: 85
 * }
 */
// console.log(averageGrades(students))

/**
 * 4
 */
function countByDepartment(employees) {
    const result = new Map()
    employees.forEach(({department}) => {
        result.set(department, (result.get(department) || 0) + 1)
    })
    return result
}
const employees = [
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "HR" },
    { name: "Dave", department: "Engineering" },
    { name: "Eve", department: "Sales" }
];
/**
 * {
 *   HR: 2,
 *   Engineering: 2,
 *   Sales: 1
 * }
 */
// console.log(countByDepartment(employees));

/**
 * 5
 */
function mapIdToName(people) {
    const result = {}
    people.forEach(({id, name}) => result[id] = name) 
    return result
}
const people = [
    { id: "s1", name: "Alice" },
    { id: "s2", name: "Bob" },
    { id: "s3", name: "Charlie" }
];
/**
 * {
 *   s1: "Alice",
 *   s2: "Bob",
 *   s3: "Charlie"
 * }
 */
// console.log(mapIdToName(people));

/**
 * 6
 */
function totalSales(sales) {
    return sales.reduce((acc, {product, quantity}) => {
        acc[product] = (acc[product] || 0) + quantity
        return acc
    }, {})
}
const sales = [
    { product: "Apple", quantity: 10 },
    { product: "Banana", quantity: 5 },
    { product: "Apple", quantity: 3 },
    { product: "Banana", quantity: 2 },
    { product: "Carrot", quantity: 7 }
];
/**
 * {
 *   Apple: 13,
 *   Banana: 7,
 *   Carrot: 7
 * }
 */
// console.log(totalSales(sales));

/**
 * 7
 */
const queryString = "name=Alice&age=28&city=New+York";
function parseQueryString(str) {
    return Object.fromEntries(new URLSearchParams(str).entries())
}
/**
 * {
 *   name: "Alice",
 *   age: "28",
 *   city: "New York"
 * }
 */
// console.log(parseQueryString(queryString));

/**
 * 8
 */
function groupMessagesByUser(messages) {
    const result = {}
    messages.forEach(({user, text}) => {
        result[user] ? result[user].push(text) : result[user] = [text]
    })
    return result
}
const messages = [
    { user: "Alice", text: "Hello!" },
    { user: "Bob", text: "Hi!" },
    { user: "Alice", text: "How are you?" },
    { user: "Bob", text: "I'm good, thanks!" }
];
/**
 * {
 *   Alice: ["Hello!", "How are you?"],
 *   Bob: ["Hi!", "I'm good, thanks!"]
 * }
 */
// console.log(groupMessagesByUser(messages));
  
/**
 * 9
 */
function averageRatingByGenre(movies) {
    const total = movies.reduce((acc, {genre, rating}) => {
        if (acc[genre]) {
            acc[genre].rating = acc[genre].rating + rating
            acc[genre].movies = acc[genre].movies + 1
            acc[genre].avg = acc[genre].rating / acc[genre].movies
        } else {
            acc[genre] = {rating, movies: 1, avg: rating}
        }
        return acc
    }, {})

    const avg = Object.fromEntries(Object.entries(total).map(([key, value]) => {
        return [key, value.avg]
    }))
    return avg
}
const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { title: "The Matrix", genre: "Sci-Fi", rating: 8.7 },
    { title: "Titanic", genre: "Romance", rating: 7.8 },
    { title: "The Notebook", genre: "Romance", rating: 7.9 }
];
/**
 * {
 *   "Sci-Fi": 8.75,
 *   "Romance": 7.85
 * }
 */
// console.log(averageRatingByGenre(movies));

/**
 * 10
 */
function groupProjectsByEmployee(employees) {
    const result = {}
    employees.forEach(({name, projects}) => {
        result[name] ? result[name].push(...projects) : result[name] = projects
    })
    return result
}
const emps = [
    { name: "Alice", projects: ["Project A", "Project B"] },
    { name: "Bob", projects: ["Project C"] },
    { name: "Alice", projects: ["Project D"] },
    { name: "Charlie", projects: ["Project E", "Project F"] }
];
/**
 * {
 *   Alice: ["Project A", "Project B", "Project D"],
 *   Bob: ["Project C"],
 *   Charlie: ["Project E", "Project F"]
 * }
 */
// console.log(groupProjectsByEmployee(emps));

/**
 * 11
 */
function totalSpentByClient(orders) {
    return orders.reduce((acc, order) => {
        acc[order.client] = acc[order.client]
            ? acc[order.client] + calcOrderTotal(order)
            : calcOrderTotal(order)
        return acc
    }, {})
}
function calcOrderTotal(order) {
    return order.items.reduce((acc, i) => acc += i.price, 0)
}
const orders = [
    {
      client: "Alice",
      items: [
        { name: "Laptop", price: 1000 },
        { name: "Mouse", price: 50 }
      ]
    },
    {
      client: "Bob",
      items: [
        { name: "Phone", price: 500 }
      ]
    },
    {
      client: "Alice",
      items: [
        { name: "Keyboard", price: 100 }
      ]
    }
];
/**
 * {
 *   Alice: 1150,
 *   Bob: 500
 * }
 */
// console.log(totalSpentByClient(orders));

/**
 * 12
 */
function convertToPrintable(obj) {
    return format(flattenObj(obj))
}
function flattenObj(obj, parentKey, result = {}) {
    Object.entries(obj).forEach(([key, value]) => {
        const newKey = parentKey ? `${parentKey}_${key}` : key
        typeof value === 'object' && value !== null
            ? flattenObj(value, newKey, result)
            : result[newKey] = value
    })
    return result
}
function format(obj) {
    return Object.entries(obj).map(([key, value]) => {
        key = key.split("_").join(' ')
        key = key[0].toLocaleUpperCase() + key.slice(1)

        if (!value) value = '-'

        return `${key}: ${value}` 
    })
}
const car = {
    make: "Toyota",
    model_name: "Corolla",
    year: null,
    engine: {
      type: "Hybrid",
      horsepower: 121,
      fuel: {
        type: "Electric/Gasoline",
        capacity: "1.8L",
      },
    },
  };
/**
 * [
 *   'Make: Toyota',
 *   'Model name: Corolla',
 *   'Year: 2020',
 *   'Engine type: Hybrid',
 *   'Engine horsepower: 121',
 *   'Engine fuel type: Electric/Gasoline',
 *   'Engine fuel capacity: 1.8L'
 * ]
 * */
// console.log(convertToPrintable(car))