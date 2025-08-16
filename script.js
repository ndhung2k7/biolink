  const quotes = [
            "Tiền tài - Danh vọng - Địa vị - Tình duyên",
            "Hãy là phiên bản tốt nhất của chính mình!",
            "Chỉ một lần sống, hãy sống hết mình.",
            "Đừng chờ đợi, hãy tạo ra cơ hội.",
            "Đam mê là ngọn lửa dẫn lối thành công."
        ];

        let quoteIndex = 0;
        const quoteElement = document.getElementById('quote');

        function changeQuote() {
            quoteElement.style.opacity = 0;
            setTimeout(() => {
                quoteElement.textContent = quotes[quoteIndex];
                quoteIndex = (quoteIndex + 1) % quotes.length;
                quoteElement.style.opacity = 1;
            }, 500);
        }

        changeQuote();
        setInterval(changeQuote, 5000);
document.addEventListener("DOMContentLoaded", function() {
    const icons = [
        "emoji/24-7.gif",
        "emoji/butterfly.gif",
        "emoji/devil.gif",
        "emoji/flashing dragon.gif",
        "emoji/golden dragon.gif",
        "emoji/green tick.gif",
        "emoji/heart.gif",
        "emoji/online.gif",
        "emoji/open.gif",
        "emoji/tick 7 colors.gif",
        "emoji/VN.gif"
    ];

    // chọn random
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    // gắn vào thẻ img có id="verifiedIcon"
    document.getElementById("verifiedIcon").src = randomIcon;
});

