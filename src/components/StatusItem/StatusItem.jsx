export default function StatusItem({ number, registered }) {
    return (
        <li className="status__item">
            <h2 className="status__subtitle">
                {number}+
            </h2>
            <p className="status__registered">
                {registered}
            </p>
        </li>
    )
}
