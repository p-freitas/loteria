import React, { useState } from "react";
import "./main.css";
import { Button, Form, Input, Typography } from "antd";
import Github from "../assets/github.png";
const { Title } = Typography;

export default function Main() {
  const [result, setResult] = useState();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    let apostados = [];
    let sorteados = [];

    if (values.apostados.indexOf(" ") >= 0) {
      apostados = values.apostados.split(/\s+/);
    } else {
      apostados = values.apostados.match(/.{1,2}/g);
    }

    if (values.sorteados.indexOf(" ") >= 0) {
      console.log("espaços sorteados");
    } else {
      sorteados = values.sorteados.match(/.{1,2}/g);
    }

    const result = apostados.filter((element) => sorteados.includes(element));

    setResult(result);
  };

  return (
    <div className="container-all">
      <main className="main-container">
        <div className="movies">
          <Title>Checador de números sorteados</Title>

          <Form onFinish={onFinish} name="loteria" form={form}>
            <div className="inputs">
              <Form.Item
                name="apostados"
                rules={[
                  { required: true, message: "Digite os números apostados" },
                ]}
              >
                <Input placeholder="Números apostados" style={{ width: 250 }} />
              </Form.Item>
              <Form.Item
                name="sorteados"
                rules={[
                  { required: true, message: "Digite os números sorteados" },
                ]}
              >
                <Input placeholder="Números sorteados" style={{ width: 250 }} />
              </Form.Item>
              <Button size="large" htmlType="submit">
                Verificar
              </Button>
            </div>
          </Form>
          {result && (
            <div className="result">
              <div className="qnt">
                <h1>Quantidades de números sorteados: {result.length}</h1>
              </div>
              <div className="numbers">
                {result.map((el) => {
                  return <h1 className="number">{el}</h1>;
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="footer-container">
        <p className="footer-line">Made by Pedro Freitas</p>
        <ul className="footer-link-container">
          <li className="footer-link">
            <a href="https://github.com/p-freitas">
              <img className="footer-icon" src={Github} alt="Logo Github" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
