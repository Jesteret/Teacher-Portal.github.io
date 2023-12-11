var chipCount = parseInt(localStorage.getItem('chipCount')) || 0;

document.getElementById('clickCount').textContent = 'Potato Chips: ' + chipCount;

document.getElementById('clickButton').addEventListener('click', function () {
  chipCount++;
  document.getElementById('clickCount').textContent = 'Potato Chips: ' + chipCount;
  localStorage.setItem('chipCount', chipCount);

  // Create a falling potato chip when clicked
  createFallingChip();

  // Create jumping potato chip animation and +1 sign
  createJumpingChipAnimation();
});

function createFallingChip() {
  var chip = document.createElement('div');
  chip.className = 'falling-chip';
  chip.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(chip);

  chip.addEventListener('animationend', function () {
    chip.parentNode.removeChild(chip);
  });
}

function createJumpingChipAnimation() {
  var jumpingChip = document.createElement('div');
  jumpingChip.className = 'jumping-chip';

  // Randomly choose left, right, or center
  var position = getRandomPosition();
  jumpingChip.style[position] = '50%';

  document.getElementById('game').appendChild(jumpingChip);

  // Create +1 sign animation
  createPlusOneAnimation(jumpingChip);

  jumpingChip.addEventListener('animationend', function () {
    jumpingChip.parentNode.removeChild(jumpingChip);
  });
}

function getRandomPosition() {
  var random = Math.random();
  if (random < 0.33) {
    return 'left';
  } else if (random < 0.66) {
    return 'right';
  } else {
    return 'center';
  }
}

function createPlusOneAnimation(jumpingChip) {
  var plusOne = document.createElement('div');
  
  document.getElementById('game').appendChild(plusOne);

  // Get the position of the jumping chip to align the +1 sign
  var rect = jumpingChip.getBoundingClientRect();
  plusOne.style.left = rect.left + 'px';
  plusOne.style.top = rect.top + 'px';

  plusOne.addEventListener('animationend', function () {
    plusOne.parentNode.removeChild(plusOne);
  });
}



var chipCount = parseInt(localStorage.getItem('chipCount')) || 0;
var clickMultiplier = 0;

var achievements = [
  { threshold: 1, name: 'Crispy Beginnings', description: 'Recieve Your First Potato Chip...', unlocked: false },
  { threshold: 50, name: 'Supreme Spud Savorer', description: 'Reached 50 chips', unlocked: false },
  { threshold: 100, name: 'Master of Munchies', description: 'Reached 100 chips', unlocked: false },
  { threshold: 250, name: 'Thats More Than Usual...', description: 'Recieve 250 Chips', unlocked: false },
  { threshold: 500, name: 'TOO MUCH CHIPS!', description: 'Get to 500 CHIPS!', unlocked: false },
  { threshold: 1000, name: '1k Chips', description: 'Reached 1,000 chips', unlocked: false },
  { threshold: 1500, name: 'Novice Cruncher', description: 'Reached 1,500 chips', unlocked: false },
  { threshold: 2000, name: 'Chip Collector', description: 'Reached 2,000 chips', unlocked: false },
  { threshold: 2250, name: 'Spud Enthusiast', description: 'Reached 2,250 chips', unlocked: false },
  { threshold: 2500, name: 'Potato Chip Muncher', description: '2,500 chips', unlocked: false },
  { threshold: 3000, name: 'Chip Boss', description: 'Reached 3,000 chips', unlocked: false },
  { threshold: 3250, name: 'Chip Robot', description: 'Reached 3,250 chips', unlocked: false },
  { threshold: 3500, name: 'Chips 4 U...', description: 'Reached 3,500 chips', unlocked: false },
  { threshold: 3750, name: 'The Record For...', description: 'Reaching 3,750 chips', unlocked: false },
  { threshold: 4000, name: 'Colosol Chips', description: 'Reached 4,000 chips', unlocked: false },
  { threshold: 4250, name: 'PLEXILE ARCADE Chips', description: 'Reached 4,250 chips', unlocked: false },
  { threshold: 4500, name: 'Exclusive Chips', description: 'Reached 4,500 chips', unlocked: false },
  { threshold: 4750, name: 'Wow Look At The Chips....', description: 'Reached 4,750 chips', unlocked: false },
  { threshold: 5000, name: 'Infinite Chips', description: 'Reached 5,000 chips', unlocked: false },
  { threshold: 5250, name: '#Chips For Life', description: 'Reached 5,250 chips', unlocked: false },
  { threshold: 5500, name: 'Real Chip Worker', description: 'Reached 5,500 chips', unlocked: false },
  { threshold: 5750, name: 'Spicy Potato Chips', description: 'Reached 5,750 chips', unlocked: false },
  { threshold: 6000, name: 'Potato Chip Hurricane', description: 'Reached 6,000 chips', unlocked: false },
  { threshold: 7000, name: 'Chipped Up', description: 'Reached 7,000 chips', unlocked: false },
  { threshold: 8000, name: '3x The Chips', description: 'Reached 8,000 chips', unlocked: false },
  { threshold: 9000, name: 'Full Bag Of Chips', description: 'Reached 9,000 chips', unlocked: false },
  { threshold: 10000, name: 'Special Potato Chip', description: 'Reached 10,000 chips', unlocked: false },
  { threshold: 10250, name: 'Extra Chips', description: 'Reached 10,250 chips', unlocked: false },
  { threshold: 10500, name: 'Worker Potato Chip', description: 'Reached 10,500 chips', unlocked: false },
  { threshold: 10750, name: 'Gamer Chip', description: 'Reached 10,750 chips', unlocked: false },
  { threshold: 11000, name: 'Salted Success', description: 'Reached 11,000 chips', unlocked: false },
  { threshold: 11250, name: 'Crunch Craze', description: 'Reached 11,250 chips', unlocked: false },
  { threshold: 11500, name: 'Salted Sorcerer', description: 'Reached 11,500 chips', unlocked: false },
  { threshold: 11750, name: 'Snack Sultan', description: 'Reached 11,750 chips', unlocked: false },
  { threshold: 12000, name: 'Terrorist Chip', description: 'Reached 12,000 chips', unlocked: false },
  { threshold: 12250, name: 'Superchip', description: 'Reached 12,250 chips', unlocked: false },
  { threshold: 12500, name: 'FBI Chip', description: 'Reached 12,500 chips', unlocked: false },
  { threshold: 12750, name: 'Impossible Chip', description: 'Reached 12,750 chips', unlocked: false },
  { threshold: 13000, name: 'Golden Gobbler', description: 'Reached 13,000 chips', unlocked: false },
  { threshold: 13250, name: 'Sigma Potato Chip', description: 'Reached 13,250 chips', unlocked: false },
  { threshold: 13500, name: 'Chip Man', description: 'Reached 13,500 chips', unlocked: false },
  { threshold: 13750, name: 'Crunch Crusader', description: 'Reached 13,750 chips', unlocked: false },
  { threshold: 14000, name: 'Potato Chip Virtuoso', description: 'Reached 14,000 chips', unlocked: false },
  { threshold: 14250, name: 'Potato Prodigy', description: 'Reached 14,250 chips', unlocked: false },
  { threshold: 15000, name: 'Chip Champion', description: 'Reached 15,000 chips', unlocked: false },
  { threshold: 20000, name: 'Potato Chip Commander', description: 'Reached 20,000 chips', unlocked: false },
  { threshold: 25000, name: 'Potato Chip Final Boss', description: 'Reached 25,000 chips', unlocked: false },
  { threshold: 50000, name: 'Potato Chip Demon', description: 'Reached 50,000 chips', unlocked: false },
  { threshold: 75000, name: ' Potato Chip OG', description: 'Reached 75,000 chips', unlocked: false },
  { threshold: 100000, name: '⚡︎ Potato Chip God ⚡︎', description: 'Reached 100,000 chips', unlocked: false },
];

document.getElementById('clickButton').addEventListener('click', function () {
  chipCount += clickMultiplier;
  document.getElementById('clickCount').textContent = 'Potato Chips: ' + chipCount;
  localStorage.setItem('chipCount', chipCount);
  checkAchievements();
});

function checkAchievements() {
  achievements.forEach(function (achievement) {
    if (chipCount >= achievement.threshold && !achievement.unlocked) {
      unlockAchievement(achievement);
    }
  });
}

function unlockAchievement(achievement) {
  achievement.unlocked = true;

  // Update the local storage with the unlocked achievement
  localStorage.setItem('achievements', JSON.stringify(achievements));

  var achievementPopup = document.createElement('div');
  achievementPopup.className = 'achievement-popup';
  achievementPopup.innerHTML = `<div class="achievement-details">
    <h2>${achievement.name}</h2>
    <p>${achievement.description}</p>
  </div>`;
  document.getElementById('achievements').appendChild(achievementPopup);

  setTimeout(function () {
    achievementPopup.style.opacity = '1';
  }, 100);

  setTimeout(function () {
    achievementPopup.style.opacity = '0';
    setTimeout(function () {
      achievementPopup.parentNode.removeChild(achievementPopup);
    }, 1000);
  }, 3000);
}

// Initialize achievements from local storage or set them to default
var storedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Update achievements with the stored data
achievements.forEach(function (achievement, index) {
  achievement.unlocked = storedAchievements[index]?.unlocked || false;
});

// Add this line to your click event to check for achievements
checkAchievements();




// ... (your existing code)

// Initialize progress from local storage or set it to default
var progress = parseInt(localStorage.getItem('progress')) || 0;

// Add this function to update the progress
function updateProgress() {
  progress = achievements.filter(achievement => achievement.unlocked).length;
  document.getElementById('progressIndicator').textContent = progress + '/' + achievements.length;

  // Update the local storage with the progress
  localStorage.setItem('progress', progress);
}

// Add this line to your unlockAchievement function to update progress when an achievement is unlocked
function unlockAchievement(achievement) {
  // ... (your existing code)

  // Update progress
  updateProgress();
}

// Initialize achievements from local storage or set them to default
var storedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Update achievements with the stored data
achievements.forEach(function (achievement, index) {
  achievement.unlocked = storedAchievements[index]?.unlocked || false;
});

// Update progress when the page loads
updateProgress();

// Add this line to your checkAchievements function to update progress
function checkAchievements() {
  // ... (your existing code)

  // Update progress
  updateProgress();
}





// ... (your existing code)

// Add this line to your updateProgress function to update the progress bar width
document.getElementById('progressIndicator').style.width = (progress / achievements.length * 100) + '%';



// ... (your existing code)

// Add this function to update the progress bar
function updateProgressBar() {
  var progress = achievements.filter(achievement => achievement.unlocked).length;
  var progressBar = document.getElementById('progressIndicator');
  progressBar.style.width = (progress / achievements.length * 100) + '%';
  progressBar.textContent = progress + '/' + achievements.length;
}

// Add this line to your unlockAchievement function to update progress when an achievement is unlocked
function unlockAchievement(achievement) {
  // ... (your existing code)

  // Update progress
  updateProgressBar();
}

// Initialize achievements from local storage or set them to default
var storedAchievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Update achievements with the stored data
achievements.forEach(function (achievement, index) {
  achievement.unlocked = storedAchievements[index]?.unlocked || false;
});

// Update progress when the page loads
updateProgressBar();

// ... (your existing code)




// ... (your existing code)

// Add this section to handle menu interactions
var startMenu = document.getElementById('startMenu');
var gameInterface = document.getElementById('gameInterface');
var playButton = document.getElementById('playButton');
var howToPlayButton = document.getElementById('howToPlayButton');

playButton.addEventListener('click', function () {
    startMenu.style.display = 'none';
    gameInterface.style.display = 'block';
});

howToPlayButton.addEventListener('click', function () {
    alert('How to play: Click the potato chip to earn potato chips and unlock achievements!');
});

// ... (your existing code)








// ... (your existing code)

// Add a function to create a golden potato chip element
function createGoldenPotatoChip() {
    var goldenPotatoChip = document.createElement('div');
    goldenPotatoChip.className = 'golden-potato-chip';
    document.body.appendChild(goldenPotatoChip);

    // Set a random starting position along the top of the screen
    goldenPotatoChip.style.left = Math.random() * window.innerWidth + 'px';
    
    // Add click event to the golden potato chip
    goldenPotatoChip.addEventListener('click', function () {
        // Give 50 clicks when clicked
        clickCount += 50;
        updateClickCount();
        // Remove the golden potato chip element
        document.body.removeChild(goldenPotatoChip);
    });

    // Add a timer to remove the golden potato chip after a certain time
    setTimeout(function () {
        document.body.removeChild(goldenPotatoChip);
    }, 2000); // Adjust the time as needed (2000 milliseconds = 2 seconds)
}

// Add a timer to create a golden potato chip every 20 seconds
setInterval(createGoldenPotatoChip, 20000); // 20000 milliseconds = 20 seconds







function changeFactoryName() {
    var newName = prompt("Enter a new name for your Potato Chip Factory:");
    if (newName !== null && newName !== "") {
        document.getElementById('potatoChipFactoryButton').innerText = newName;
    }
}








document.addEventListener('DOMContentLoaded', function () {
    // Function to play click sound
    function playClickSound() {
        var audio = new Audio();
        audio.src = 'https://cdn.glitch.global/72539fea-3c5b-4a75-a1f6-6623f23b10a9/Potato-chip-crunch-single-bite.mp3?v=1702140428303';
        audio.crossOrigin = 'anonymous'; // Set cross-origin attribute
        audio.play().catch(function (error) {
            console.error('Error playing audio:', error);
        });

        // Increase the size of the potato chip
        var clickButton = document.getElementById('clickButton');
        clickButton.style.transform = 'scale(0.9)';
        setTimeout(function () {
            clickButton.style.transform = 'scale(1)';
        }, 100); // Adjust the duration of the scale effect (in milliseconds)
    }

    // Attach click event listener to the main potato chip
    document.getElementById('clickButton').addEventListener('click', playClickSound);

    // ... (your existing code)
});

