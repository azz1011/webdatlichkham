import db from "../models/index"
let getHomePage = async(req, res) => {
    try {
        let data = await db.User.findAll();
        
        return res.render('homePage.ejs',{
            data : JSON.stringify(data)
        });

    }catch (e){
        console.log(e)
    }
    
}
let getAboutUs = (req, res) => {
    return res.render('aboutus/about.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutUs: getAboutUs,
}