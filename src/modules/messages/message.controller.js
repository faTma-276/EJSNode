import { messageModel } from "../../../database/models/message.model.js";


export const message =async (req ,res)=>{
    const {name ,isLoggedIn ,userId} = req.session;
    var fullUrl = req.protocol + '://' + req.get('host') ;
    
    let messages = await messageModel.find({sendToId:userId})
    console.log(messages);
    if(req.session.isLoggedIn){
        res.render('message.ejs' ,{name, isLoggedIn ,fullUrl ,userId ,messages});
    }else{
        res.redirect('/login');
    }
    
}

// <% for( let index = 0; index < messages.length; index++ ) { %>
//     <div class="card py-5">
//         <p><%=messages[index][message]%></p>
//     </div>
// <% } %>
