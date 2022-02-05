const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "db7f28db9f4dbe",
    pass: "03728215f821be"
  }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if (!error) {
            console.log(info);
            return info.response;
        }
        console.log(error);
    });
};

let email_data = {
    from: "qkrcksrbs8chase@gmail.com"
    ,to: "qkrcksrbs8chase@gmail.com"
    ,subject: "node js 테스트 메일"
    ,text: "node test"
}

send(email_data);