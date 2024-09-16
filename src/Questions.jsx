import SingleQuestion from "./SingleQuestion"

const Questions = ({questions}) => {
  return (
    <section className="container">
        <h1>Questions</h1>
        {
            questions.map((question)=>{
                return <SingleQuestion key={questions.id} {...question} />
            })
        }
    </section>
  )
}

export default Questions