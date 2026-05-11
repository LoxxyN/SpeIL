import './ReviewResultEmpty.css'

export const ReviewResultEmpty = () => {
  return (
    <div className="review-result--empty">
      <h2>Здесь будут результаты ревью</h2>

      <div className="review-result--empty__description">
        <div className="review-result--empty__faq review-result--empty__list">
          <h3>Что проверит агент?</h3>
          <ul>
            <li>Критические ошибки</li>
            <li>Стилистические ошибки</li>
            <li>Меклие ошибки</li>
          </ul>
        </div>

        <div className="review-result--empty__guide review-result--empty__list">
          <h3>Вот как это работает</h3>
          <ol>
            <li>Напиши или вставь код в панель </li>
            <li>Нажми “Получить ревью”</li>
            <li>Получи ревью с категориями</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
