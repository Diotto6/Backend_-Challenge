"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer_1 = __importDefault(require("nodemailer"));
const router = (0, express_1.Router)();
router.post("/contact", (req, res) => {
    let data = req.body;
    if (data.name.length === 0 ||
        data.email.length === 0 ||
        data.message.length === 0) {
        return res.json({ msg: "Prencha os campos Corretamente!" });
    }
    let smtpTransporter = nodemailer_1.default.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
            user: "nicodiottodev@gmail.com",
            pass: "eneo66!!",
        },
    });
    let mailOptions = {
        from: data.email,
        to: "nicodiottodev@gmail.com",
        subject: `message from ${data.name}`,
        html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
    };
    smtpTransporter.sendMail(mailOptions, (error) => {
        try {
            if (error)
                return res.status(400).json({ msg: "Prencha os campos Corretamente!" });
            res.status(200).json({ msg: "Obrigado por entrar em contato com Nicolas" });
        }
        catch (error) {
            if (error)
                return res.status(500).json({ msg: "There is server error" });
        }
    });
});
module.exports = router;
