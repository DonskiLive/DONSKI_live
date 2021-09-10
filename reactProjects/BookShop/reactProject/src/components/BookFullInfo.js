import '../css/Button.css'

export default function BookFullInfo({book:{title, author, genre, yearIssue, cover}, closeClickHandler}){ // {title, subtitle, text} = props создание переменной с помощю деструкторизации
	return(
        <div className = 'full-info'>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>Genre: {genre}, year of issue: {yearIssue}</p>
            <img src={cover}  alt = {title}/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iste qui ratione? Dolorum labore, ut similique nemo at ea? Voluptate modi esse nihil et molestiae ratione vel dignissimos neque provident mollitia autem voluptatum odit molestias deserunt, rem alias quae obcaecati perferendis repudiandae inventore nesciunt. Debitis inventore quae id vero adipisci!</p>         
			<button className="button-style button-close" onClick={closeClickHandler}>close</button>
		</div>
    )
}