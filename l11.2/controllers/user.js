export const register = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);


    res.status(200).json({
        success: true,
        message: "Account created successfully"
    });
}

export const login = (req, res) => {

    // const obj = req.body;
    // console.log(obj);

    // ⏫⏫⏫⏫ upar wala aur niche wala same ⏬⏬⏬⏬
    const { name, email, password } = req.body;
    console.log(name, email, password)


    res.status(200).json({
        success: true,
        message: "Account created successfully"
    });
}
