window.addEventListener("DOMContentLoaded", (event) => {
    const selectBtn = document.querySelector(".select-btn"),
          itemAlcoLabels = document.querySelectorAll(".label-alco");

    if (selectBtn) {
        selectBtn.addEventListener('click', () => {
            selectBtn.classList.toggle('open');
        });
    }

    if (itemAlcoLabels) {
        itemAlcoLabels.forEach(label => {
            const checkbox = label.querySelector('input[type="checkbox"]'); // Находим соответствующий чекбокс внутри label
            label.addEventListener("click", () => {
                const listItem = label.closest(".item-alco"); // Находим ближайший родительский элемент с классом .item-alco
                if (listItem) {
                    listItem.classList.toggle("checked", checkbox.checked); // Добавляем/удаляем класс checked в зависимости от состояния чекбокса
                }

                let checked = document.querySelectorAll(".checked"),
                    btnText = document.querySelector(".btn-text");

                if (checked && checked.length > 0) {
                    let selectedItems = [];
                    checked.forEach(checkedItem => {
                        let itemText = checkedItem.querySelector(".item-text").innerText;
                        selectedItems.push(itemText);
                    });
                    btnText.innerText = selectedItems.join(", ");
                } else {
                    btnText.innerText = "Какой алкоголь вы предпочитаете?";
                }
            })
        })
    }
});