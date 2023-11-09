export const renderTitle = () => {
    const titleContainer = document.getElementById('title') || document.createElement('div');
    const titleElement = document.createElement('p')
    titleElement.textContent = 'Testing the Dom with Vitest';
    titleContainer.append(titleElement);
}

renderTitle();