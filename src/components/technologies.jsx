import './technologies.css';
export default function Technologies() {
    const technologies = ['HTML', 'CSS', 'Javascript', 'React', 'Next.js', 'Bootstrap'];
    return (
        <div className="radio-inputs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {technologies.map(technology => (
                <label className="radio" key={technology}>
                    <input type="radio" name="radio" />
                    <span className="name">{technology}</span>
                </label>
            ))}
        </div>
    )
}