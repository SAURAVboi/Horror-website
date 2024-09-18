document.getElementById('enter-button').addEventListener('click', function() {
    document.getElementById('horror-sound').play();
    this.style.display = 'none';
    createBloodShards();
    animateGhosts();
});

function createBloodShards() {
    const bloodShardsContainer = document.getElementById('blood-shards');
    for (let i = 0; i < 100; i++) {
        const shard = document.createElement('div');
        shard.classList.add('blood-shard');
        shard.style.left = `${Math.random() * 100}vw`;
        shard.style.animationDelay = `${Math.random() * 5}s`;
        bloodShardsContainer.appendChild(shard);
    }
}

function animateGhosts() {
    const ghosts = document.querySelectorAll('.ghost');
    ghosts.forEach(ghost => {
        setTimeout(() => {
            ghost.style.opacity = '1';
        }, 1000);
    });
}

// Hover sound effect
document.querySelectorAll('.creepy-text h2, .creepy-text p').forEach(element => {
    element.addEventListener('mouseover', () => {
        document.getElementById('hover-sound').play();
    });
});
