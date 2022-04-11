let i = 1;

const randomAdvice = async (evt) => {
    const response = await fetch(`https://api.adviceslip.com/advice/${++i}`);
    const data = await response.json();

    let id = data.slip.id;
    let advice = data.slip.advice;

    const classId = document.getElementsByClassName("id").item(0);
    const classAdvice = document.getElementsByClassName("advice").item(0);

    classId.textContent = id;
    classAdvice.textContent = `"${advice}"`;
}