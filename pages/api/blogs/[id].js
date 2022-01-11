import dbConnect from "../../../utils/dbConnect";
import Blog from "../../../models/Blog";

dbConnect();

export default async (req, res) => {

    const { query: { id }, method } = req;

    switch(method) {
        case 'GET':
            try {
                const blog = await Blog.findById(id);
                if(!blog) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: blog });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedBlog = await Blog.deleteOne({ _id: id });
                if (!deletedBlog) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: {} });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        default:
            return res.status(400).json({ success: false });
            break;
    }
}