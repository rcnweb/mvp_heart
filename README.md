<div align='center'>
  <h1>
    MVP - Heart Disease Prediction
  </h1>
</div>

Este projeto tem como objetivo utilizar algoritmos de Machine Learning para prever se um paciente possui ou não doença cardíaca com base em dados clínicos. A solução é composta por duas partes:

- 📓 Um **notebook em Python (Google Colab)** responsável pelo pré-processamento, treinamento, avaliação e exportação do modelo.
- 🌐 Uma **aplicação Full Stack (frontend em React + backend Flask)** que permite ao usuário preencher dados e obter a predição em tempo real via API.

---

## 🔍 Objetivo

Desenvolver um modelo de machine learning que consiga, a partir de características clínicas de um paciente (como pressão arterial, colesterol, tipo de dor no peito, etc), prever a presença ou ausência de doença cardíaca.

---

## 🧠 Modelos Testados

- K-Nearest Neighbors (KNN)
- Árvore de Decisão
- Naive Bayes
- Support Vector Machine (SVM) **(modelo final escolhido)**

---

## 📓 Notebook no Google Colab

O notebook `mvp_colab.ipynb` segue as etapas:

1. Importação e análise exploratória dos dados.
2. Pré-processamento (normalização e codificação).
3. Treinamento dos modelos.
4. Avaliação dos resultados.
5. Exportação do melhor modelo em `.pkl`.

### ▶️ Como executar no Colab

1. Acesse o notebook via [Google Colab](https://colab.research.google.com/).
2. O arquivo `heart.csv` se encontra dentro da pasta dataset para ser consumido por url no notebook. (foi obtido a partir do [Kaggle](https://www.kaggle.com/datasets/fedesoriano/heart-failure-prediction?resource=download)).
3. Execute todas as células de cima para baixo.
4. Ao final, o modelo será exportado como `modelo_svm_heart.pkl`.

---

## 🚀 Como rodar a aplicação

### 🔙 Backend (Flask)

1. Clone o repositório e navegue até a pasta `backend`.
2. Com o terminal aberto na pasta do backend, iremos ativar o ambiente virtual do python. Para isso siga os passos abaixo:
   - 2.1
     ```bash
     python -m venv venv 
   - 2.2
     ```bash
     venv\Scripts\activate 
3. Agora já com o ambiente virtual ativado podemos instalar as dependências.
   ```bash
   pip install -r requirements.txt 
4. Para iniciar a aplicação rode o comando:
   ```bash
   python app.py

A aplicação irá ser iniciada na porta 5000.

5. Acesse o [Swagger](http://localhost:5000/swagger).

---

### ✅ Realizando o teste automatizado do backend

É necessário que na pasta model esteja tanto o modelo exportado quanto o arquivo heart.csv, por segurança eles já estão lá, mas caso queira colocar o que você gerou, apenas substitua os mesmos.

1. No terminal aberto na pasta do backend, rode o seguinte comando para realizar o PyTest do modelo utilizado.
   ```bash
   pytest model/test_modelo.py -s
A flag `-s` é importante para visualizar os logs do teste.

---

### 🔜 Frontend (React)

1. Clone o repositório e navegue até a pasta `frontend`.
2. Com o terminal aberto na pasta do frontend, iremos instalar as depedências.
   ```bash
   npm install
3. Agora iremos iniciar a aplicação com:
   ```bash
   npm start
   
A aplicação irá ser iniciada na porta 3000

4. Acesse o [Frontend](http://localhost:3000).

---

## Conclusão 

Esse projeto marcou a construção de um MVP completo voltado para a predição de doenças cardíacas com o uso de Machine Learning. A ideia foi permitir que, a partir de dados clínicos básicos de um paciente, seja possível estimar de forma automática a chance de presença de uma condição cardíaca — algo que, se bem utilizado, pode auxiliar em decisões médicas com mais agilidade e precisão.

Foram testados diversos algoritmos clássicos, como KNN, Árvore de Decisão e Naive Bayes, e o modelo final escolhido foi o SVM, por apresentar um ótimo equilíbrio entre precisão e recall. O pipeline de desenvolvimento foi dividido de maneira clara entre um notebook no Google Colab (responsável por treinar, avaliar e exportar o modelo) e uma aplicação full stack (com backend Flask e frontend React) que torna esse modelo acessível via interface para qualquer usuário.

Mais do que apenas rodar o modelo, essa aplicação serve como uma base sólida para expandir funcionalidades, testar outros modelos, integrar com bancos de dados reais e tornar a predição mais próxima do dia a dia de sistemas médicos.

---

## 🔐 Segurança e boas práticas

Durante o desenvolvimento, também foi importante refletir sobre os cuidados que um sistema desse tipo deve ter em relação à segurança e privacidade dos dados. Se essa aplicação fosse utilizada em um cenário real, seria essencial seguir boas práticas estudadas na disciplina de Desenvolvimento de Software Seguro. Por exemplo:

Anonimização dos dados: garantir que nenhuma informação pessoal identifique diretamente os pacientes.

Validação de entrada: evitar que dados maliciosos causem falhas no sistema.

Uso de HTTPS: proteger a comunicação entre o navegador do usuário e a API.

Autenticação e controle de acesso: impedir que qualquer pessoa acesse ou modifique informações críticas sem autorização.

Cuidados com logs e arquivos sensíveis: como o modelo .pkl e os registros de entrada e saída.

Mesmo sendo um MVP, já é possível pensar nessas questões para garantir que a solução evolua de forma ética, segura e preparada para cenários reais.

