(function() {
    // let canvas = document.getElementById('canvas');
    // let context = canvas.getContext('2d');
    /*let count = 10; // 烟花粒子数量
    let initialRadius = 10; // 烟花环绕半径
    let particles = [];
    let point = {
        x: 0,
        y: 0,
        radius: 10,
        count: 10,
        timer: null
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function clearCanvas() {
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    canvas.addEventListener('mousedown', handleMousedown);

    function handleMousedown(e) {
        let x = e.clientX;
        let y = e.clientY;

        let p = {
            ...point,
            x,
            y
        }

        fire(p);
    }

    function draw(p) {
        clearCanvas();

        for (let i = 0; i < p.count; i++) {
            let angle = 360/p.count * i; // 烟花粒子角度
            let radian = angle * Math.PI / 180; // 烟花粒子弧度

            let vx = p.x + Math.cos(radian) * p.radius;
            let vy = p.y + Math.sin(radian) * p.radius;

            let size = 2;
            context.beginPath();
            context.arc(vx, vy, size, 0, Math.PI*2)
            context.closePath();
            context.fillStyle = "#ff0000";
            context.fill();
        }
    }

    function fire(p) {
        function tick() {
            draw(p); // 绘制烟花
            if (p.radius >= 100) {
                clearInterval(p.timer)
            } else {
                p.radius++
            }
        }
        tick();
        p.timer = setInterval(tick, 30); // 每30毫秒绘制一次
    }*/

})()
