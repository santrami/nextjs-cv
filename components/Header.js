export default function Header() {

    const myStyle = {
        background: "black",
        backgroundImage: "url('/back1.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%", 
        opacity:"0.8"       
    }
    return (
        <header className="row" style={myStyle}>
            <div className="col-md-12 mb-0">
                <div className="card card-body bg-transparent text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="foto-cv.jpg" alt="" className='img-fluid px-5' height="30px" />
                        </div>
                        <div className="col-md-8">
                            <h1>Santiago Ramírez</h1>
                            <h5 className='text-muted'>FullStack Developer</h5>
                            <p className='fs-6 my-3 me-5'>Análisis, desarrollo e implementación de
                                funcionalidades para aplicaciones web.
                                Conocimiento de estructuras de datos y
                                algoritmos. OOP y MVC. Experiencia en
                                consumo de APIs como Opta, Wasi y
                                Cloudbeds. Manejo de base de datos
                                Mysql, SQL y firebase. Habilidades en
                                PHP, MySQL, HTML5, Javacript, React, nodejs, nextjs, express, Bootstrap, entre otras librerías js.
                                Capacidad de autogestión e investigación
                                en tecnologías de vanguardia. Eficacia en
                                proyectos independientes. Buenas
                                habilidades de colaboración y
                                retroalimentación con el equipo
                                productivo.

                            </p>                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
