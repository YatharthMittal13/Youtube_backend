const asyncHandler = (func) => async (req , resp , next) => {
    try {
        await func(req , resp , next)
    } catch (error) {
        resp.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}



module.exports =  {asyncHandler}