// Totally Radical JavaScript for Cyber Coders Network

// Simulate Dial-up Connection Sound
function dialUpSound() {
    console.log("CONNECTING TO CYBER SPACE... *SCREEEECH* *BEEP* *BOOP*");
    alert("🌐 ESTABLISHING CONNECTION TO CYBER CODERS NETWORK 🖥️");
}

// Hacker-style Text Effect
function hackerText(element) {
    const text = element.textContent;
    const chars = 'ABCDEF0123456789';
    let iterations = 0;

    const interval = setInterval(() => {
        element.textContent = text
            .split('')
            .map((letter, index) => {
                if(index < iterations) {
                    return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('');
        
        if(iterations >= text.length) clearInterval(interval);
        
        iterations += 1/3;
    }, 30);
}

// Random Background Glitch Effect
function backgroundGlitch() {
    const colors = ['#000000', '#000033', '#001100', '#003300'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Initialize Cyber Effects
window.onload = function() {
    // Simulate connection on page load
    dialUpSound();

    // Apply hacker text to headers
    const headers = document.querySelectorAll('font[size="+2"]');
    headers.forEach(hackerText);

    // Random background glitch every 15 seconds
    setInterval(backgroundGlitch, 15000);
}

// Radical Repository Actions
function repoAction(action) {
    const actions = {
        view: "ACCESSING SOURCE CODE... STANDBY",
        edit: "INITIALIZING CYBER EDIT MODE",
        delete: "CAUTION: REPOSITORY DELETION SEQUENCE ACTIVATED"
    };

    alert(`🖥️ ${actions[action]} 🚀`);
}
// Handle repository creation
document.getElementById('repoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const repoName = document.getElementById('repoName').value.trim();

    if (repoName) {
        const reposList = document.getElementById('repos');

        // Create a repository entry
        const repoItem = document.createElement('li');
        repoItem.textContent = repoName;

        // Add buttons for actions
        const viewBtn = createButton('View', () => repoAction('view', repoName));
        const editBtn = createButton('Edit', () => repoAction('edit', repoName));
        const deleteBtn = createButton('Delete', () => deleteRepo(repoItem, repoName));

        repoItem.appendChild(viewBtn);
        repoItem.appendChild(editBtn);
        repoItem.appendChild(deleteBtn);

        reposList.appendChild(repoItem);

        // Clear the input
        document.getElementById('repoName').value = '';
        alert(`Repository '${repoName}' created successfully!`);
    }
});

// Function to create buttons
function createButton(text, callback) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', callback);
    return button;
}

// Delete repository
function deleteRepo(repoItem, repoName) {
    if (confirm(`Are you sure you want to delete the repository '${repoName}'?`)) {
        repoItem.remove();
        alert(`Repository '${repoName}' deleted.`);
    }
}

// Enhanced Radical Repository Actions
function repoAction(action, repoName) {
    const actions = {
        view: `ACCESSING '${repoName}'...`,
        edit: `EDITING '${repoName}' MODE ACTIVATED`,
        delete: `WARNING: DELETION OF '${repoName}' INITIATED`
    };

    alert(`🖥️ ${actions[action]} 🚀`);
}
