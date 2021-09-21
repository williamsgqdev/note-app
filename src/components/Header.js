const Header = ({handleToggleDarkMode , handleColorPicker}) => {

    // const handleColorPicker = {}
    return ( 
        <div className="main-header-container">
                    <div className="header">
            <h1>Note</h1>
            <div className="save" onClick= {()=> handleToggleDarkMode((previousDarkmode)=> !previousDarkmode) } >Toggle mode</div>
        </div>
            <select onChange = {handleColorPicker} style={{marginBottom:'20px'}} >
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
            </select>
        </div>

     );
}
 
export default Header;