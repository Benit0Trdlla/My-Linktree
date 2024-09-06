import "./cards.css"
export default function Cards({ name, svg, href }) {

    return (
        <a href={href === "benitotridelladolce@gmail.com" ? "mailto:" + href : href} target={href === "benitotridelladolce@gmail.com" ? "_self" : "_blank"}>
            <div className="container noselect">
                <div className="canvas">
                    <div className="tracker tr-1"></div>
                    <div className="tracker tr-2"></div>
                    <div className="tracker tr-3"></div>
                    <div className="tracker tr-4"></div>
                    <div className="tracker tr-5"></div>
                    <div className="tracker tr-6"></div>
                    <div className="tracker tr-7"></div>
                    <div className="tracker tr-8"></div>
                    <div className="tracker tr-9"></div>
                    <div className="tracker tr-10"></div>
                    <div className="tracker tr-11"></div>
                    <div className="tracker tr-12"></div>
                    <div className="tracker tr-13"></div>
                    <div className="tracker tr-14"></div>
                    <div className="tracker tr-15"></div>
                    <div className="tracker tr-16"></div>
                    <div className="tracker tr-17"></div>
                    <div className="tracker tr-18"></div>
                    <div className="tracker tr-19"></div>
                    <div className="tracker tr-20"></div>
                    <div className="tracker tr-21"></div>
                    <div className="tracker tr-22"></div>
                    <div className="tracker tr-23"></div>
                    <div className="tracker tr-24"></div>
                    <div className="tracker tr-25"></div>
                    <div id="card" >
                        <p id="prompt">{svg}</p>
                        {/* {href === "benitotridelladolce@gmail.com" && <div className="title">Enviame un mensaje<br />{name}</div>} */}
                        <div className="title">
                            {href === "benitotridelladolce@gmail.com" ? "Envíame un mensaje por" : "Visita mi perfil de"}
                            <br />{name}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </a>
    )
}