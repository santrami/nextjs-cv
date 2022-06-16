export default function Experience({experience}) {
  return (
    <li className="container py-2">        
        <h3>{experience.company}</h3>
        <h5 className="text-secondary">{experience.year}</h5>
        <p>{experience.description}</p>
    </li>    
  )
}
