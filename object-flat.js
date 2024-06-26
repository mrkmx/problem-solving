const user = {
    id: 1,
    name: "mrkmx",
    languages: ['en', 'ru'],
    contact: {
        email: 'test@example.com',
        phone: null,
        social: {
            linkedin: "@mrkmx-dev",
        },
    },
};

function flattenObj(obj, parentKey, result = {}) {
    Object.entries(obj).forEach(([key, value]) => {
        const newKey = parentKey ? `${parentKey}_${key}` : key
        if (Array.isArray(value)) {
            result[newKey] = value.toString()
        } else if (typeof value === 'object' && value !== null) {
            flattenObj(value, newKey, result)
        } else {
            result[newKey] = value
        }
    })
    return result
}

console.log(flattenObj(user))
/**
 * Output:
 * {
 *   id: 1,
 *   name: 'mrkmx',
 *   languages: 'en,ru',
 *   contact_email: 'test@example.com',
 *   contact_phone: null,
 *   contact_social_linkedin: '@mrkmx-dev'
 * }
*/
