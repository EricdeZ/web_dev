export const animations = {
    height: 'animation-height'
}

export const Animation = ({state, component, renderComponent, animation}) => {
    console.log(animation)
    const classname_state = state ? 'opened' : 'closed'
    return (
        <div className={`animation-container ${animation} ${classname_state}`}>
            {component}
        </div>
    )
}