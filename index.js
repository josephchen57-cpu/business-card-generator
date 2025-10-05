// Simple starter for a business card generator

function generateBusinessCard(name, title, email) {
    return `Name: ${name}\nTitle: ${title}\nEmail: ${email}`;
}

// Example usage
const card = generateBusinessCard('John Doe', 'Software Engineer', 'john.doe@example.com');
console.log(card);