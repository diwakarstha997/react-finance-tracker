const Button = (props) => {
    const { link, className, text } = props
    return(
        <a href={link} className={className}>{text}</a>
    )
}

export default Button;