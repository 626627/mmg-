// 获取DOM元素
const pig = document.getElementById('pig');
const speechBubble = document.getElementById('speechBubble');
const bubbleText = document.getElementById('bubbleText');
const heartsContainer = document.getElementById('hearts');
const floatingPigsContainer = document.getElementById('floatingPigs');
const starsContainer = document.getElementById('stars');

// 语音气泡文本数组
const speechTexts = [
    "哼哼~ 我是可爱的莫琪！",
    "今天天气真好呢！🌞",
    "我最喜欢吃胡萝卜了！🥕",
    "你想和我一起玩吗？",
    "莫琪很开心哦！✨",
    "哼哼哼~ 生活真美好！",
    "我会很多技能呢！",
    "快来摸摸我的小耳朵！"
];

// 初始化函数
function init() {
    createFloatingHearts();
    createFloatingPigs();
    createTwinklingStars();
    startRandomSpeech();
    addPigClickEvent();
}

// 创建飘浮的爱心
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
        
        // 4秒后移除爱心
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 4000);
    }, 3000);
}

// 创建漂浮的小猪图案
function createFloatingPigs() {
    const pigEmojis = ['🐷', '🐽', '🐖'];
    
    setInterval(() => {
        const floatingPig = document.createElement('div');
        floatingPig.className = 'floating-pig';
        floatingPig.innerHTML = pigEmojis[Math.floor(Math.random() * pigEmojis.length)];
        floatingPig.style.left = Math.random() * 100 + '%';
        floatingPig.style.animationDelay = Math.random() * 3 + 's';
        floatingPig.style.animationDuration = (4 + Math.random() * 4) + 's';
        floatingPigsContainer.appendChild(floatingPig);
        
        // 8秒后移除小猪
        setTimeout(() => {
            if (floatingPig.parentNode) {
                floatingPig.parentNode.removeChild(floatingPig);
            }
        }, 8000);
    }, 2500);
}

// 创建闪烁的星星
function createTwinklingStars() {
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = '⭐';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// 随机显示语音气泡
function startRandomSpeech() {
    setInterval(() => {
        const randomText = speechTexts[Math.floor(Math.random() * speechTexts.length)];
        bubbleText.textContent = randomText;
    }, 5000);
}

// 添加点击小猪事件
function addPigClickEvent() {
    pig.addEventListener('click', () => {
        // 随机选择一个动画
        const animations = ['jump', 'spin', 'wiggle'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        // 移除之前的动画类
        pig.classList.remove('jump', 'spin', 'wiggle', 'color-change');
        
        // 添加新动画
        setTimeout(() => {
            pig.classList.add(randomAnimation);
        }, 10);
        
        // 显示随机文本
        const randomText = speechTexts[Math.floor(Math.random() * speechTexts.length)];
        bubbleText.textContent = randomText;
        
        // 移除动画类
        setTimeout(() => {
            pig.classList.remove(randomAnimation);
        }, 1000);
    });
}

// 让莫琪跳跃
function makePigJump() {
    pig.classList.remove('jump', 'spin', 'wiggle', 'color-change');
    setTimeout(() => {
        pig.classList.add('jump');
        bubbleText.textContent = "哇！我跳得好高！🦘";
    }, 10);
    
    setTimeout(() => {
        pig.classList.remove('jump');
    }, 600);
}

// 让莫琪转圈
function makePigSpin() {
    pig.classList.remove('jump', 'spin', 'wiggle', 'color-change');
    setTimeout(() => {
        pig.classList.add('spin');
        bubbleText.textContent = "转圈圈真有趣！🌪️";
    }, 10);
    
    setTimeout(() => {
        pig.classList.remove('spin');
    }, 1000);
}

// 让莫琪摇摆
function makePigWiggle() {
    pig.classList.remove('jump', 'spin', 'wiggle', 'color-change');
    setTimeout(() => {
        pig.classList.add('wiggle');
        bubbleText.textContent = "摇摆摇摆~ 好开心！💃";
    }, 10);
    
    setTimeout(() => {
        pig.classList.remove('wiggle');
    }, 800);
}

// 变换颜色
function changePigColor() {
    pig.classList.remove('jump', 'spin', 'wiggle', 'color-change');
    setTimeout(() => {
        pig.classList.add('color-change');
        bubbleText.textContent = "看我变身！我是彩虹猪！🌈";
    }, 10);
    
    setTimeout(() => {
        pig.classList.remove('color-change');
    }, 2000);
}

// 创建特效粒子
function createParticleEffect(x, y) {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        document.body.appendChild(particle);
        
        // 粒子动画
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        const animate = () => {
            posX += vx * 0.02;
            posY += vy * 0.02;
            opacity -= 0.02;
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(particle);
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// 添加鼠标点击特效
document.addEventListener('click', (e) => {
    if (e.target !== pig && !pig.contains(e.target)) {
        createParticleEffect(e.clientX, e.clientY);
    }
});

// 键盘控制
document.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()) {
        case ' ':
        case 'enter':
            makePigJump();
            break;
        case 's':
            makePigSpin();
            break;
        case 'w':
            makePigWiggle();
            break;
        case 'c':
            changePigColor();
            break;
    }
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 添加一些随机的互动效果
setInterval(() => {
    // 随机眨眼动画增强
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        if (Math.random() < 0.1) {
            eye.style.animation = 'none';
            eye.style.transform = 'scaleY(0.1)';
            setTimeout(() => {
                eye.style.animation = 'blink 3s infinite';
                eye.style.transform = 'scaleY(1)';
            }, 150);
        }
    });
}, 1000);

// 鼠标悬停效果
pig.addEventListener('mouseenter', () => {
    bubbleText.textContent = "你好呀！想和我玩吗？😊";
});

pig.addEventListener('mouseleave', () => {
    setTimeout(() => {
        const randomText = speechTexts[Math.floor(Math.random() * speechTexts.length)];
        bubbleText.textContent = randomText;
    }, 1000);
});