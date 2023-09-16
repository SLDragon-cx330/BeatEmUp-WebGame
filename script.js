const xxx = document.getElementById("xxx");
const damage = document.getElementById("damage");
const message = document.getElementById("message");
const currentHealth = document.getElementById("current-health");
let healthPercentage = 100; // 初始100%生命值
let totalDamage = 0; // Add missing variable definition

document.querySelector(".tools").addEventListener("click", function(event) {
    if(event.target.classList.contains("attack-tool")) {
        let dmg = 0;
        switch(event.target.id) {
            case 'kick':
                dmg = 10;
                break;
            case 'spin':
                dmg = 20;
                break;
            case 'bury':
                dmg = 30;
                break;
        }

        totalDamage += dmg;
        healthPercentage -= dmg; // 减少生命值
        healthPercentage = Math.max(healthPercentage, 0); // 确保生命值不小于0

        currentHealth.style.width = `${healthPercentage}%`; // 更新血条宽度

        damage.innerText = `-${dmg}`;
        damage.style.opacity = 1;

        setTimeout(() => {
            damage.style.opacity = 0;
        }, 500);

        if(totalDamage >= 100) {
            message.innerText = "我投降，请别打了！";
        }
    }
});