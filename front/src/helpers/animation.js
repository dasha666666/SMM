const animation = (oldClass, newClass) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const square = entry.target.querySelector(
        `.${oldClass}`
      );
      if (entry.isIntersecting) {
        square.classList.add(newClass);
        return; // если класс добавлен, продолжать уже не надо
      }
      // перемещение завершено, теперь надо удалить класс
      square.classList.remove(newClass);
    });
  });
  observer.observe(document.querySelector(`.${newClass}`));
};


export default animation;