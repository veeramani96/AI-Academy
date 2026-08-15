/* ==========================================================================
   AETHER_AI ACADEMY CORE APP LOGIC
   Features: Detailed FreeCodeCamp Course Tree (30 Steps per Realm),
             Dynamic Step Compiler, 10-Column Workshop Grids,
             Sound Synth, AI Oracle Speech, and MLOps Terminal.
   ========================================================================== */

// --- 1. DYNAMIC STEP BUILDER SOURCE LINES ---
const level0Lines = [
    { code: "# Python Developer Foundations", desc: "Write a comment marking the file header.", err: "Header comment is missing." },
    { code: "import sys", desc: "Import the system utilities library.", err: "Import sys is missing." },
    { code: "import os", desc: "Import the operating system module.", err: "Import os is missing." },
    { code: "print('System Host OS:', sys.platform)", desc: "Print the host operating system platform.", err: "Host OS print is missing." },
    { code: "print('Current Directory:', os.getcwd())", desc: "Print the current working directory path.", err: "Current directory print is missing." },
    { code: "env_user = os.getenv('USER', 'Guest')", desc: "Lookup the USER environment variable, defaulting to 'Guest'.", err: "env_user assignment is missing." },
    { code: "print('Session User Identification:', env_user)", desc: "Print the session user identification name.", err: "Session user print is missing." },
    { code: "def verify_env_paths():", desc: "Declare environment path verification method.", err: "verify_env_paths header is missing." },
    { code: "    return 'PATH' in os.environ", desc: "Return true if PATH environment key is configured.", err: "PATH presence return is missing." },
    { code: "print('Env Configured:', verify_env_paths())", desc: "Print the environment configuration verification output.", err: "Env configured print is missing." }
];

const level1Lines = [
    { code: "print('Starting Aether AI Sandbox...')", desc: "Print startup validation strings.", err: "print check is missing." },
    { code: "user_name = 'Developer Neophyte'", desc: "Assign name string to variable user_name.", err: "user_name variable is missing." },
    { code: "xp_points = 100", desc: "Initialize numeric points value to 100.", err: "xp_points variable is missing." },
    { code: "tasks_completed = ['L0_basics']", desc: "Create a list tracking completed task ids.", err: "tasks_completed list is missing." },
    { code: "active_role = 'AI Apprentice'", desc: "Define active role as AI Apprentice.", err: "active_role variable is missing." },
    { code: "if xp_points > 50:", desc: "Create a conditional branch checking if XP exceeds 50.", err: "if condition check is missing." },
    { code: "    active_role = 'AI Developer'", desc: "Elevate active role to AI Developer.", err: "active_role assignment is missing." },
    { code: "for t in tasks_completed:", desc: "Create a loop iterating through completed tasks.", err: "for loop header is missing." },
    { code: "    print('Ingested Task:', t)", desc: "Print the task loop element details.", err: "task element print is missing." },
    { code: "def add_points(points, bonus=10):", desc: "Declare add_points function with default bonus 10.", err: "add_points header is missing." },
    { code: "    return points + bonus", desc: "Return calculated total points summation.", err: "points summation return is missing." },
    { code: "xp_points = add_points(xp_points)", desc: "Update XP points using add_points function.", err: "xp_points updates is missing." }
];

const level2Lines = [
    { code: "import json", desc: "Import the json serializer module.", err: "Import json is missing." },
    { code: "import fastapi", desc: "Import the fastapi framework.", err: "Import fastapi is missing." },
    { code: "app = fastapi.FastAPI()", desc: "Initialize the FastAPI application client.", err: "app instantiation is missing." },
    { code: "@app.get('/api/health')", desc: "Bind a GET route pointing to health endpoints.", err: "health endpoint route decorator is missing." },
    { code: "def health_check():", desc: "Declare health check function handler.", err: "health_check header is missing." },
    { code: "    return {'status': 'healthy', 'db': 'connected'}", desc: "Return database connectivity health payload.", err: "health dictionary return is missing." },
    { code: "@app.post('/api/users')", desc: "Bind a POST route pointing to users endpoint.", err: "POST users route decorator is missing." },
    { code: "async def create_user(data: dict):", desc: "Declare asynchronous create_user handler receiving a data dictionary.", err: "create_user header is missing." },
    { code: "    db_record = {'id': 1, 'email': data.get('email')}", desc: "Extract user email and generate simulated database record.", err: "db_record dict is missing." },
    { code: "    return {'user': db_record, 'created': True}", desc: "Return success creation payload.", err: "return record dictionary is missing." }
];

const level3Lines = [
    { code: "import numpy as np", desc: "Import the NumPy math package.", err: "Import numpy is missing." },
    { code: "import pandas as pd", desc: "Import the Pandas Dataframe library.", err: "Import pandas is missing." },
    { code: "matrix_a = np.array([[1, 2], [3, 4]])", desc: "Create a 2x2 NumPy matrix array.", err: "matrix_a is missing." },
    { code: "matrix_b = np.array([[5, 6], [7, 8]])", desc: "Create another 2x2 NumPy matrix array.", err: "matrix_b is missing." },
    { code: "dot_product = np.dot(matrix_a, matrix_b)", desc: "Calculate dot product multiplication.", err: "dot_product is missing." },
    { code: "df = pd.DataFrame({'scores': [85, 90, 95]})", desc: "Create a Pandas DataFrame containing scores list.", err: "df DataFrame is missing." },
    { code: "mean_score = df['scores'].mean()", desc: "Calculate mean average of scores list.", err: "mean_score is missing." },
    { code: "std_dev = df['scores'].std()", desc: "Calculate standard deviation of scores.", err: "std_dev is missing." },
    { code: "def gradient_step(w, lr, grad):", desc: "Declare gradient_step updater method.", err: "gradient_step header is missing." },
    { code: "    return w - lr * grad", desc: "Return updated parameter subtracting lr scaled gradient.", err: "descent step calculation return is missing." }
];

const level4Lines = [
    { code: "from sklearn.linear_model import LinearRegression", desc: "Import the LinearRegression linear model classifier.", err: "LinearRegression import is missing." },
    { code: "from sklearn.model_selection import train_test_split", desc: "Import the dataset train_test_split tool.", err: "train_test_split import is missing." },
    { code: "X = [[1], [2], [3], [4]]", desc: "Initialize features matrix sample rows.", err: "X features list is missing." },
    { code: "y = [2, 4, 6, 8]", desc: "Initialize labels list elements.", err: "y labels list is missing." },
    { code: "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25)", desc: "Split features & labels with test size 0.25.", err: "train_test_split call is missing or incorrect size." },
    { code: "model = LinearRegression()", desc: "Instantiate scikit-learn LinearRegression model client.", err: "LinearRegression instantiation is missing." },
    { code: "model.fit(X_train, y_train)", desc: "Fit linear model using training partitions.", err: "model.fit call is missing." },
    { code: "predictions = model.predict(X_test)", desc: "Run predictions on the test feature partitions.", err: "model.predict call is missing." },
    { code: "accuracy_score = model.score(X_test, y_test)", desc: "Calculate model coefficient score.", err: "model.score evaluation is missing." },
    { code: "print('ML Score Coefficient:', accuracy_score)", desc: "Print evaluated ML score log.", err: "score print is missing." }
];

const level5Lines = [
    { code: "import torch", desc: "Import PyTorch deep learning framework.", err: "Import torch is missing." },
    { code: "import torch.nn as nn", desc: "Import PyTorch neural network modules wrapper.", err: "nn import is missing." },
    { code: "class AetherNet(nn.Module):", desc: "Declare custom AetherNet class inheriting from nn.Module.", err: "Class header inheriting from nn.Module is missing." },
    { code: "    def __init__(self):", desc: "Define neural network constructor.", err: "Constructor definition is missing." },
    { code: "        super(AetherNet, self).__init__()", desc: "Trigger parent nn.Module constructors initialization.", err: "super constructor call is missing." },
    { code: "        self.linear1 = nn.Linear(8, 16)", desc: "Initialize a linear input layer with 8 inputs and 16 outputs.", err: "self.linear1 linear layer is missing." },
    { code: "        self.relu = nn.ReLU()", desc: "Initialize a ReLU activation function module.", err: "self.relu activator module is missing." },
    { code: "        self.linear2 = nn.Linear(16, 1)", desc: "Initialize output layer mapping 16 inputs to 1 output.", err: "self.linear2 layer is missing." },
    { code: "    def forward(self, x):", desc: "Declare forward propagation method.", err: "forward header is missing." },
    { code: "        out = self.linear2(self.relu(self.linear1(x)))", desc: "Compute output values passing input x through linear, relu, and output layers.", err: "forward layers updates calculations are missing." },
    { code: "        return out", desc: "Return calculated outputs values tensor.", err: "out return is missing." }
];

const level6Lines = [
    { code: "from langchain_openai import ChatOpenAI", desc: "Import Langchain ChatOpenAI API module.", err: "ChatOpenAI import is missing." },
    { code: "from langchain_core.prompts import ChatPromptTemplate", desc: "Import ChatPromptTemplate utilities.", err: "ChatPromptTemplate import is missing." },
    { code: "llm_client = ChatOpenAI(model='gpt-4o-mini', temperature=0.7)", desc: "Instantiate ChatOpenAI client with temperature 0.7.", err: "llm_client instantiation is missing." },
    { code: "system_msg = 'You are Aethera, oracle AI mentor.'", desc: "Formulate system instructions string.", err: "system_msg is missing." },
    { code: "prompt_tmpl = ChatPromptTemplate.from_messages([('system', system_msg), ('user', '{input}')])", desc: "Build chat messages template mapping system and user inputs.", err: "prompt_tmpl template builder is missing." },
    { code: "def generate_response(query_text):", desc: "Declare response generator helper.", err: "generate_response header is missing." },
    { code: "    chain = prompt_tmpl | llm_client", desc: "Construct a LangChain runnable pipe connecting prompt and LLM.", err: "chain connection pipeline is missing." },
    { code: "    res = chain.invoke({'input': query_text})", desc: "Invoke the chain with query input.", err: "chain.invoke is missing." },
    { code: "    return res.content", desc: "Return final content output string.", err: "res.content return statement is missing." }
];

const level7Lines = [
    { code: "class AetherAgent:", desc: "Declare the AetherAgent tool calling coordinator class.", err: "Class header is missing." },
    { code: "    def __init__(self):", desc: "Define constructor method.", err: "Constructor definition is missing." },
    { code: "        self.tools = {'search_web': lambda: 'Aether gate code: 9942'}", desc: "Establish tool map connecting key search_web to a returns lambda function.", err: "self.tools dictionary is missing." },
    { code: "    def call_tool(self, tool_name):", desc: "Declare tool calling executor.", err: "call_tool header is missing." },
    { code: "        if tool_name in self.tools:", desc: "Verify tool exists inside registered tools map.", err: "presence check is missing." },
    { code: "            return self.tools[tool_name]()", desc: "Trigger tool callback and return output.", err: "tool trigger returns is missing." },
    { code: "        return 'Tool not found'", desc: "Return error fallback strings.", err: "fallback return is missing." },
    { code: "agent_runner = AetherAgent()", desc: "Instantiate AetherAgent client.", err: "AetherAgent instance is missing." },
    { code: "res_val = agent_runner.call_tool('search_web')", desc: "Execute registered search_web tool.", err: "call_tool test run is missing." },
    { code: "print('Search Result:', res_val)", desc: "Print search result outputs log.", err: "result print is missing." }
];

const level8Lines = [
    { code: "import sounddevice as sd", desc: "Import the sounddevice audio recording framework.", err: "Import sounddevice is missing." },
    { code: "import numpy as np", desc: "Import NumPy numerical metrics.", err: "Import numpy is missing." },
    { code: "def record_audio_chunk(duration, fs=16000):", desc: "Declare record_audio_chunk helper with default frequency 16000.", err: "record_audio_chunk header is missing." },
    { code: "    audio_data = sd.rec(int(duration * fs), samplerate=fs, channels=1)", desc: "Record single-channel audio using sounddevice rec method.", err: "sd.rec call is missing." },
    { code: "    sd.wait()", desc: "Wait until audio recording stream finishes writing to buffers.", err: "sd.wait call is missing." },
    { code: "    return audio_data", desc: "Return recorded audio float array.", err: "audio_data return is missing." },
    { code: "def process_speech(audio_bytes):", desc: "Declare speech processor transcriber mock.", err: "process_speech header is missing." },
    { code: "    rms_amplitude = np.sqrt(np.mean(audio_bytes**2))", desc: "Calculate root-mean-square amplitude of audio signals.", err: "rms calculation is missing." },
    { code: "    return 'Voice command parsed' if rms_amplitude > 0.01 else 'Silence'", desc: "Return speech command status string depending on amplitude threshold.", err: "status string checks return is missing." }
];

const level9Lines = [
    { code: "import docker", desc: "Import docker SDK client library.", err: "Import docker is missing." },
    { code: "docker_client = docker.from_env()", desc: "Instantiate Docker connection client from environment configs.", err: "docker.from_env call is missing." },
    { code: "def deploy_fastapi_pod(image_name):", desc: "Declare container deployment helper.", err: "deploy_fastapi_pod header is missing." },
    { code: "    container = docker_client.containers.run(", desc: "Begin container run parameters initialization...", err: "containers.run call is missing." },
    { code: "        image=image_name,", desc: "Define Docker container image name parameter.", err: "image parameter is missing." },
    { code: "        ports={'80/tcp': 8080},", desc: "Expose internal TCP port 80 to host port 8080.", err: "ports mapping parameter is missing." },
    { code: "        detach=True", desc: "Set container to run in detached background threads mode.", err: "detach parameter is missing." },
    { code: "    )", desc: "Close containers run method parameters.", err: "closing parentheses is missing." },
    { code: "    return container.id", desc: "Return deployed container unique tracking identifier string.", err: "container.id return statement is missing." }
];

// Helper to escape HTML tags in strings
function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// --- Base Metadata for all 10 Certification Realms ---
const realms = {
    0: {
        id: 0,
        name: "Developer Foundation",
        topic: "Dev Basics & Git",
        certTitle: "Developer Foundation & Environments Certification",
        image: "assets/nlp_realm.jpg",
        xpReward: 100,
        salaryReward: 0,
        rankTitle: "Software Neophyte",
        techStack: ["VS Code", "Git", "GitHub", "Terminal", "Bash", "OS Basics"],
        lore: "Before venturing into artificial intelligence, you must master the command console. Configure your OS environment parameters, open the terminal, and initialize your first local Git code repository to build files.",
        glossary: [
            { term: "Environment Variables", def: "System-wide key-value pairs stored by the operating system that define configuration pathways, API keys, and execution environment states." },
            { term: "Git VCS", def: "A distributed Version Control System that tracks code alterations across files, allowing engineers to undo mistakes and merge parallel branches." },
            { term: "JSON", def: "JavaScript Object Notation. A lightweight text-based data interchange format widely used for client-server API payloads." }
        ]
    },
    1: {
        id: 1,
        name: "Master Python 🐍",
        topic: "Python Programming",
        certTitle: "Python Programming & Algorithms Certification",
        image: "assets/nlp_realm.jpg",
        xpReward: 120,
        salaryReward: 0,
        rankTitle: "Python Engineer Apprentice",
        techStack: ["Python 3", "Pip", "Virtualenv", "OOP", "Lambda", "Scrapers"],
        lore: "Master the logic engine of modern AI. Learn variable mappings, logic blocks, loops iteration controls, functional scoping, OOP structures, and libraries creation to compile scrapers and trackers.",
        glossary: [
            { term: "List Comprehension", def: "A concise syntax for creating new lists in Python by applying expressions to elements inside an iterable." },
            { term: "Lambda Function", def: "An anonymous inline function declared in a single line, useful for quick callbacks or calculations." },
            { term: "Virtualenv", def: "An isolated environment tool that locks project-specific dependency packages without polluting global libraries." }
        ]
    },
    2: {
        id: 2,
        name: "Software Development",
        topic: "Git, SQL & FastAPI",
        certTitle: "Software Development & Web backend Certification",
        image: "assets/cv_realm.jpg",
        xpReward: 150,
        salaryReward: 0,
        rankTitle: "Software Developer",
        techStack: ["PostgreSQL", "SQL", "FastAPI", "Uvicorn", "APIs", "REST"],
        lore: "Build software surrounding AI models. Orchestrate Git merges, write relational SQL queries to PostgreSQL, construct HTTP request handlers, and deploy FastAPI endpoints serving JSON payloads.",
        glossary: [
            { term: "FastAPI", def: "A modern, high-speed Python web framework for building REST APIs with auto-generated Swagger documentation." },
            { term: "PostgreSQL", def: "A powerful, open-source object-relational database management system supporting complex tables joins and foreign keys." },
            { term: "HTTP Route Status", def: "Numerical status codes returned by backend servers indicating result states: e.g. 200 OK, 201 Created, 404 Not Found." }
        ]
    },
    3: {
        id: 3,
        name: "Mathematics & Data",
        topic: "Data Analysis & Math",
        certTitle: "AI Mathematics & Data Science Certification",
        image: "assets/rl_realm.jpg",
        xpReward: 180,
        salaryReward: 0,
        rankTitle: "Mathematical Data Miner",
        techStack: ["NumPy", "Pandas", "Matplotlib", "Algebra", "Calculus"],
        lore: "Understand the mathematical matrices behind neural networks. Compute dot products, calculate variance distributions, formulate partial derivatives, and build gradient descent models.",
        glossary: [
            { term: "Gradient Descent", def: "An optimization algorithm that minimizes cost functions iteratively by taking steps proportional to the negative gradient." },
            { term: "Pandas DataFrame", def: "A 2-dimensional labeled data structure with columns of potentially different types, resembling spreadsheets or databases." },
            { term: "Dot Product", def: "An algebraic operation that takes two equal-length sequences of numbers and returns a single numeric value." }
        ]
    },
    4: {
        id: 4,
        name: "Machine Learning 🤖",
        topic: "scikit-learn Modeling",
        certTitle: "Machine Learning Modeling Certification",
        image: "assets/agents_realm.jpg",
        xpReward: 200,
        salaryReward: 0,
        rankTitle: "Machine Learning Engineer",
        techStack: ["scikit-learn", "Supervised Learning", "Regression", "Random Forest"],
        lore: "Build predictive classifiers and regressions. Design data splits, train Random Forests using features/labels vectors, and evaluate accuracy metrics using scikit-learn libraries.",
        glossary: [
            { term: "Random Forest", def: "An ensemble learning method that trains multiple decision trees and averages their predictions to improve accuracy and control overfitting." },
            { term: "Train/Test Split", def: "A technique that partitions dataset files into training subsets (to fit weights) and testing subsets (to evaluate predictions)." },
            { term: "Overfitting", def: "A modeling error where an algorithm fits training noise too closely, failing to generalize to unseen testing data." }
        ]
    },
    5: {
        id: 5,
        name: "Deep Learning 🧠",
        topic: "PyTorch Neural Nets",
        certTitle: "Deep Neural Networks Certification",
        image: "assets/ops_realm.jpg",
        xpReward: 220,
        salaryReward: 0,
        rankTitle: "Deep Learning Specialist",
        techStack: ["PyTorch", "torch.nn", "CNN", "Transformer", "Linear Layers"],
        lore: "Construct deep neural network systems. Write weights initializers, compile forward activation propagations, implement backpropagation cost updates, and run PyTorch models.",
        glossary: [
            { term: "Backpropagation", def: "An algorithm that calculates gradient partial derivatives of loss functions with respect to neural network weights, propagating errors backward." },
            { term: "CNN", def: "Convolutional Neural Network. A class of deep neural networks commonly applied to analyzing visual imagery grids." },
            { term: "Self-Attention", def: "An attention mechanism in Transformers relating different positions of a single sequence to compute its representation." }
        ]
    },
    6: {
        id: 6,
        name: "Generative AI 🚀",
        topic: "Prompt Engineering & RAG",
        certTitle: "Generative AI & LLM Systems Certification",
        image: "assets/nlp_realm.jpg",
        xpReward: 250,
        salaryReward: 0,
        rankTitle: "Generative AI Engineer",
        techStack: ["LangChain", "OpenAI API", "RAG", "ChromaDB", "Few-shot"],
        lore: "Build LLM applications. Master prompt templates formatting, token boundaries, role configurations, and document chunking, indexing text segments into vector database stores.",
        glossary: [
            { term: "Tokens", def: "Sub-word string fragments generated by text encoders that act as the atomic inputs for language model prediction matrices." },
            { term: "Context Window", def: "The maximum amount of prompt token resources an LLM can consume in a single forward pass inference loop." },
            { term: "RAG Chunking", def: "The process of splitting large documents into tiny contextual paragraphs before indexing to fit search matches." }
        ]
    },
    7: {
        id: 7,
        name: "AI Agents 🔥",
        topic: "Autonomous Systems",
        certTitle: "Autonomous AI Agents & Swarms Certification",
        image: "assets/cv_realm.jpg",
        xpReward: 280,
        salaryReward: 0,
        rankTitle: "AI Agent Overlord",
        techStack: ["CrewAI", "LangGraph", "Tool Calling", "Memory Registers", "Swarms"],
        lore: "Build autonomous JARVIS assistant crews. Write tool calling schemas allowing models to call APIs, set planning graph loops, and execute multi-agent task networks.",
        glossary: [
            { term: "Tool Calling", def: "A model feature enabling LLMs to output structured JSON arguments mapping function schemas, instructing host runners to call web tools." },
            { term: "Multi-Agent System", def: "A swarm topology where independent specialized agent nodes collaborate on tasks, exchanging messages to solve complex goals." },
            { term: "Agent Loop", def: "An autonomous cycle where agents evaluate tools outcomes, plan next actions, and repeat until the target task terminates." }
        ]
    },
    8: {
        id: 8,
        name: "Voice AI 🎙️",
        topic: "Audio & Speech Streams",
        certTitle: "Voice AI & Real-time Agents Certification",
        image: "assets/rl_realm.jpg",
        xpReward: 300,
        salaryReward: 0,
        rankTitle: "Voice Agent Specialist",
        techStack: ["Whisper STT", "WebRTC", "Audio Streams", "TTS Synthesis", "WebSockets"],
        lore: "Design voice-first assistants. Record audio feeds, compile Speech-to-Text Whisper transcriptions, synthesize emotional Text-to-Speech voices, and stream frames over WebSockets.",
        glossary: [
            { term: "Speech to Text (STT)", def: "The process of converting spoken audio waveforms into written text transcripts using neural classifiers like Whisper." },
            { term: "Text to Speech (TTS)", def: "The neural synthesis of realistic human-sounding spoken audio waveforms from input text characters." },
            { term: "WebRTC Audio", def: "A real-time network protocol for streaming low-latency voice media chunks directly between clients and servers." }
        ]
    },
    9: {
        id: 9,
        name: "Production AI & MLOps",
        topic: "Docker & Cloud MLOps",
        certTitle: "Production MLOps & Cloud Deployments Certification",
        image: "assets/ops_realm.jpg",
        xpReward: 350,
        salaryReward: 0,
        rankTitle: "Production MLOps Architect",
        techStack: ["Docker", "Kubernetes", "CI/CD", "Triton Server", "MLOps", "AWS/GCP"],
        lore: "Deploy models at massive scale. Build production Docker images, configure FastAPI async background threads, write CI/CD automation rules, and monitor model input drifts.",
        glossary: [
            { term: "Docker Container", def: "A lightweight standalone executable software package wrapping application code and system libraries dependencies." },
            { term: "CI/CD Pipeline", def: "Continuous Integration and Continuous Deployment. Automated scripts running code checks and deploying weights models on push updates." },
            { term: "Model Drift", def: "The degradation of model performance over time due to shifts in input data distributions compared to training weights." }
        ]
    }
};

// Compile granular lines into standard FCC 30-step Workshop steps
function compileRealmsSteps() {
    realms[0].steps = buildStepsList(level0Lines);
    realms[1].steps = buildStepsList(level1Lines);
    realms[2].steps = buildStepsList(level2Lines);
    realms[3].steps = buildStepsList(level3Lines);
    realms[4].steps = buildStepsList(level4Lines);
    realms[5].steps = buildStepsList(level5Lines);
    realms[6].steps = buildStepsList(level6Lines);
    realms[7].steps = buildStepsList(level7Lines);
    realms[8].steps = buildStepsList(level8Lines);
    realms[9].steps = buildStepsList(level9Lines);
}

function buildStepsList(lines) {
    let steps = {};
    for (let i = 0; i < lines.length; i++) {
        const stepNum = i + 1;
        const lineObj = lines[i];

        // Starter code builds upon previous correct lines
        let starter = "";
        for (let j = 0; j < i; j++) {
            starter += lines[j].code + "\n";
        }
        starter += "# TODO: " + lineObj.desc + "\n";

        // Space-insensitive string matching to verify correct code insertion
        const cleanTarget = lineObj.code.replace(/\s+/g, "");
        const checkFn = (code) => {
            const cleanCode = code.replace(/\s+/g, "");
            return cleanCode.indexOf(cleanTarget) !== -1;
        };

        steps[stepNum] = {
            title: "Task " + stepNum + ": " + lineObj.code.trim().split("(")[0].split("=")[0].replace("def ", ""),
            directions: "Write a line of Python code to: " + lineObj.desc,
            starterCode: starter,
            solutionCode: lineObj.code,
            tests: [
                {
                    id: "s" + stepNum + "_t1",
                    desc: "Your code must satisfy: <code>" + escapeHTML(lineObj.code) + "</code>",
                    check: checkFn,
                    tip: lineObj.err
                }
            ],
            errorTrace: "Traceback (most recent call last):\n  File \"main.py\", line " + stepNum + "\nSyntaxError: " + lineObj.err,
            hint: "Mentor Hint: Write the following code:\n<pre><code>" + escapeHTML(lineObj.code) + "</code></pre>"
        };
    }
    return steps;
}

// --- 2. GAME STATE MANAGEMENT ---
let gameState = {
    xp: 0,
    level: 0,
    title: "Novice Prompt Wizard",
    salary: 0,
    stats: {
        math: 10,
        coding: 15,
        dl: 5,
        ops: 5
    },
    unlockedLevels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
    completedLevels: [],
    
    // Map tracking completed steps inside each Workshop level
    completedSteps: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
    },
    // The active Workshop level and step loaded in Workspace
    currentLevelDetail: null,
    activeStep: 1, 

    achievements: [
        { id: "start", name: "First Contact", desc: "Initiated training at AetherAI Academy", icon: "fa-solid fa-graduation-cap", unlocked: true },
        { id: "nlp", name: "Voice Oracle", desc: "Conquered the Valley of Whispers", icon: "fa-solid fa-message", unlocked: false },
        { id: "cv", name: "Visionary Shaman", desc: "Mastered image-to-image models in Mirage Canyon", icon: "fa-solid fa-circle-dot", unlocked: false },
        { id: "rl", name: "Policy Maker", desc: "Trained an autonomous Golem combat agent", icon: "fa-solid fa-gamepad", unlocked: false },
        { id: "swarm", name: "Hive Mind", desc: "Orchestrated a swarm of autonomous coders", icon: "fa-solid fa-network-wired", unlocked: false },
        { id: "deploy", name: "Singularity Architect", desc: "Deployed 70B parameters on local Edge Triton configs", icon: "fa-solid fa-bolt", unlocked: false }
    ],
    audioEnabled: true,
    voiceEnabled: true,
    codeSandboxCodes: {} // Map key: "levelId_stepId" -> code strings
};

// --- 3. PROCEDURAL SOUND SYNTHESIZER ---
class SoundSynth {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    playOsc(freq, duration, type = "sine", gainVal = 0.1) {
        if (!gameState.audioEnabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        gainNode.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playClick() {
        this.playOsc(1200, 0.08, "triangle", 0.08);
    }

    playSuccess() {
        this.playOsc(523.25, 0.1, "sine"); 
        setTimeout(() => this.playOsc(659.25, 0.1, "sine"), 100); 
        setTimeout(() => this.playOsc(783.99, 0.25, "sine"), 200); 
    }

    playUnlock() {
        const notes = [440, 554, 659, 880];
        notes.forEach((note, index) => {
            setTimeout(() => {
                this.playOsc(note, 0.15, "sawtooth", 0.05);
            }, index * 100);
        });
    }

    playLevelUp() {
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((note, index) => {
            setTimeout(() => {
                this.playOsc(note, 0.2, "square", 0.04);
            }, index * 120);
        });
    }

    playFail() {
        this.playOsc(220, 0.3, "sawtooth", 0.1);
        setTimeout(() => this.playOsc(165, 0.4, "sawtooth", 0.1), 150);
    }
}
const synth = new SoundSynth();

// --- 4. TEXT-TO-SPEECH (TTS) AI ORACLE MENTOR ---
class AIVoiceSystem {
    constructor() {
        this.synth = window.speechSynthesis;
        this.recognition = null;
        this.isListening = false;
        this.mentorName = "Aethera";
        this.setupRecognition();
    }

    speak(text) {
        if (!gameState.voiceEnabled) return;
        this.synth.cancel();
        
        const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");

        const utterance = new SpeechSynthesisUtterance(cleanText);
        const voices = this.synth.getVoices();
        let selectedVoice = voices.find(v => v.name.includes("Google UK English") || v.name.includes("Natural") || v.name.includes("Zira"));
        if (!selectedVoice) {
            selectedVoice = voices.find(v => v.lang.startsWith("en"));
        }
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        utterance.rate = 1.05;
        utterance.pitch = 1.1;

        utterance.onstart = () => {
            document.getElementById("status-pulse").className = "status-pulse speaking";
            document.getElementById("oracle-state-indicator").textContent = `SYSTEM: SPEAKING (${this.mentorName.toUpperCase()})`;
            visualizerMode = "speaking";
        };
        utterance.onend = () => {
            if (this.isListening) {
                document.getElementById("status-pulse").className = "status-pulse listening";
                document.getElementById("oracle-state-indicator").textContent = "SYSTEM: LISTENING...";
                visualizerMode = "listening";
            } else {
                document.getElementById("status-pulse").className = "status-pulse idle";
                document.getElementById("oracle-state-indicator").textContent = "SYSTEM: IDLE";
                visualizerMode = "idle";
            }
        };

        this.synth.speak(utterance);
    }

    setupRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn("Speech Recognition not supported.");
            return;
        }
        
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
            this.isListening = true;
            document.getElementById("mic-btn").classList.add("active");
            document.getElementById("mic-btn").querySelector("span").textContent = "ORACLE LISTENING...";
            document.getElementById("status-pulse").className = "status-pulse listening";
            document.getElementById("oracle-state-indicator").textContent = "SYSTEM: LISTENING...";
            visualizerMode = "listening";
            updateSystemResponse("Oracle activated. Say a command, Neophyte.");
        };

        this.recognition.onend = () => {
            this.isListening = false;
            document.getElementById("mic-btn").classList.remove("active");
            document.getElementById("mic-btn").querySelector("span").textContent = "ACTIVATE VOICE ORACLE";
            document.getElementById("status-pulse").className = "status-pulse idle";
            document.getElementById("oracle-state-indicator").textContent = "SYSTEM: IDLE";
            visualizerMode = "idle";
        };

        this.recognition.onerror = (e) => {
            console.error("Speech Recognition Error:", e);
            updateUserTranscript("Speech error detected.");
            this.recognition.stop();
        };

        this.recognition.onresult = (event) => {
            const resultIndex = event.resultIndex;
            const transcript = event.results[resultIndex][0].transcript.trim().toLowerCase();
            updateUserTranscript(transcript);
            this.parseVoiceCommand(transcript);
        };
    }

    toggleListening() {
        if (!this.recognition) {
            updateSystemResponse("Voice recognition is not supported on this browser.");
            return;
        }
        synth.playClick();
        if (this.isListening) {
            this.recognition.stop();
        } else {
            this.recognition.start();
        }
    }

    parseVoiceCommand(cmd) {
        console.log("Voice Command Received:", cmd);
        
        const levelMatch = cmd.match(/(?:explain|open|level|start)\s*(?:level)?\s*([1-5])/);
        if (levelMatch) {
            const lvlNum = parseInt(levelMatch[1]);
            if (gameState.unlockedLevels.includes(lvlNum)) {
                enterWorkspace(lvlNum, 1);
                this.speak(`Entering Workspace for Level ${lvlNum}, step 1. Review directions.`);
                updateSystemResponse(`Opening Level ${lvlNum} workspace.`);
            } else {
                this.speak(`Level ${lvlNum} is locked. Complete preceding certifications.`);
                updateSystemResponse(`Access Denied: Level ${lvlNum} locked.`);
            }
            return;
        }

        if (cmd.includes("hint") || cmd.includes("mentor") || cmd.includes("consult") || cmd.includes("clue")) {
            consultMentorHint();
            return;
        }

        if (cmd.includes("run") || cmd.includes("tests") || cmd.includes("execute") || cmd.includes("compile")) {
            if (gameState.currentLevelDetail) {
                runFCCUnitTests();
            } else {
                this.speak("You are not currently in a coding workspace.");
            }
            return;
        }

        if (cmd.includes("close") || cmd.includes("back") || cmd.includes("exit") || cmd.includes("curriculum")) {
            exitWorkspace();
            return;
        }

        if (cmd.includes("stats") || cmd.includes("progress") || cmd.includes("profile")) {
            const msg = `You are level ${gameState.level}, titled ${gameState.title}.`;
            this.speak(msg);
            updateSystemResponse("Profile summary read.");
            return;
        }

        if (cmd.includes("mute") || cmd.includes("silent")) {
            gameState.voiceEnabled = false;
            gameState.audioEnabled = false;
            updateHeaderToggles();
            updateSystemResponse("Muted.");
            return;
        }
        if (cmd.includes("unmute") || cmd.includes("sound")) {
            gameState.voiceEnabled = true;
            gameState.audioEnabled = true;
            updateHeaderToggles();
            this.speak("Oracle audio fully restored.");
            updateSystemResponse("Oracle unmuted.");
            return;
        }

        this.speak(`Command not recognized: ${cmd}. Try saying: Start Level 1, Run tests, or Consult Mentor.`);
        updateSystemResponse("Command not recognized. Check Oracle shortcuts.");
    }
}
const voiceSystem = new AIVoiceSystem();

// --- 5. AUDIO VISUALIZER SPECTRUM ANIMATION ---
const canvas = document.getElementById("voice-wave");
const ctx = canvas.getContext("2d");
let visualizerMode = "idle"; 

function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener("resize", resizeCanvas);
setTimeout(resizeCanvas, 100);

let frameCount = 0;
function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    frameCount++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const midY = canvas.height / 2;
    const width = canvas.width;

    if (visualizerMode === "idle") {
        ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
            const angle = (x / width) * Math.PI * 4;
            const ripple = Math.sin(angle + frameCount * 0.05) * 2 * Math.sin(frameCount * 0.01);
            ctx.lineTo(x, midY + ripple);
        }
        ctx.stroke();
    } 
    else if (visualizerMode === "listening") {
        const barWidth = 4;
        const gap = 2;
        const numBars = Math.floor(width / (barWidth + gap));
        ctx.fillStyle = "rgba(0, 240, 255, 0.75)";
        
        for (let i = 0; i < numBars; i++) {
            const seed = Math.sin(i * 0.15 + frameCount * 0.15) * Math.cos(i * 0.05 + frameCount * 0.08);
            const height = Math.abs(seed) * (canvas.height * 0.6) + 5;
            const x = i * (barWidth + gap);
            ctx.fillRect(x, midY - height / 2, barWidth, height);
        }
    } 
    else if (visualizerMode === "speaking") {
        ctx.lineWidth = 2.5;

        // Wave 1
        ctx.strokeStyle = "rgba(0, 240, 255, 0.8)";
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
            const freq = 0.015;
            const amp = Math.sin(frameCount * 0.08) * (canvas.height * 0.35) + (canvas.height * 0.1);
            const y = midY + Math.sin(x * freq + frameCount * 0.12) * amp * Math.sin(x * 0.005);
            ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Wave 2
        ctx.strokeStyle = "rgba(189, 0, 255, 0.6)";
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
            const freq = 0.025;
            const amp = Math.cos(frameCount * 0.06) * (canvas.height * 0.25) + (canvas.height * 0.05);
            const y = midY + Math.cos(x * freq - frameCount * 0.15) * amp * Math.sin(x * 0.005);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
}
drawVisualizer();

// --- 6. CORE GAME LOGIC CONTROLLERS ---

function updateStatsUI() {
    document.getElementById("current-xp").textContent = gameState.xp;
    const nextXP = (gameState.level + 1) * 100;
    document.getElementById("next-level-xp").textContent = nextXP;
    
    const xpPercent = Math.min((gameState.xp / nextXP) * 100, 100);
    document.getElementById("xp-bar-fill").style.width = `${xpPercent}%`;
    document.getElementById("xp-percent").textContent = `${Math.floor(xpPercent)}%`;

    document.getElementById("player-level-badge").textContent = `LVL ${gameState.level}`;
    document.getElementById("player-rank").textContent = gameState.title;
    
    document.getElementById("stat-math").style.width = `${gameState.stats.math}%`;
    document.getElementById("stat-math-val").textContent = gameState.stats.math;
    document.getElementById("stat-coding").style.width = `${gameState.stats.coding}%`;
    document.getElementById("stat-coding-val").textContent = gameState.stats.coding;
    document.getElementById("stat-dl").style.width = `${gameState.stats.dl}%`;
    document.getElementById("stat-dl-val").textContent = gameState.stats.dl;
    document.getElementById("stat-ops").style.width = `${gameState.stats.ops}%`;
    document.getElementById("stat-ops-val").textContent = gameState.stats.ops;

    animateValue("salary-value", parseSalaryNumber(document.getElementById("salary-value").textContent), gameState.salary, 1000);
}

function parseSalaryNumber(str) {
    return parseInt(str.replace(/[^0-9]/g, '')) || 0;
}

function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    let current = start;
    const increment = end > start ? Math.ceil(range / (duration / 16)) : Math.floor(range / (duration / 16));
    const stepTime = 16;
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        obj.textContent = `$${current.toLocaleString()}`;
    }, stepTime);
}

function updateAchievementsUI() {
    const list = document.getElementById("achievements-list");
    list.innerHTML = "";
    gameState.achievements.forEach(ach => {
        const item = document.createElement("div");
        item.className = `achievement-icon ${ach.unlocked ? 'unlocked' : ''}`;
        item.setAttribute("data-tooltip", `${ach.name}: ${ach.desc}`);
        item.innerHTML = `<i class="${ach.icon}"></i>`;
        list.appendChild(item);
    });
}

function updateLeaderboardUI() {
    const list = document.getElementById("offers-list");
    list.innerHTML = "";

    const jobs = [
        { title: "Junior Prompt Engineer", comp: "Anthropic Aether Labs", salary: 120000, lvlReq: 1 },
        { title: "Computer Vision Specialist", comp: "Aegis Surveillance", salary: 160000, lvlReq: 2 },
        { title: "Simulation & Game AI Developer", comp: "Epic Citadel Corp", salary: 210000, lvlReq: 3 },
        { title: "Multi-Agent Architect", comp: "Nexus Intelligence", salary: 270000, lvlReq: 4 },
        { title: "Lead AI Engineer (MLOps & Edge)", comp: "Cosmo Computing Gateways", salary: 350000, lvlReq: 5 }
    ];

    jobs.forEach(job => {
        const card = document.createElement("div");
        const isUnlocked = gameState.level >= job.lvlReq;
        const isBestMatch = gameState.level === job.lvlReq && !gameState.completedLevels.includes(job.lvlReq);

        card.className = `offer-card ${isUnlocked ? 'unlocked' : 'locked'} ${isBestMatch ? 'best' : ''}`;
        
        let statusText = "LOCKED";
        if (isUnlocked) statusText = isBestMatch ? "ACTIVE RECOMMENDED" : "UNLOCKED OFFER";

        card.innerHTML = `
            <div class="offer-header">
                <span class="offer-company">${job.comp}</span>
            </div>
            <div class="offer-title">${job.title}</div>
            <div class="offer-reqs">
                <span>Req: Level ${job.lvlReq}</span>
                <span class="offer-status-badge">${statusText}</span>
            </div>
        `;
        list.appendChild(card);
    });
}

// --- 7. FREECODECAMP DYNAMIC CURRICULUM COLLAPSIBLE TREE RENDERER ---

function renderCurriculumList() {
    const container = document.getElementById("curriculum-container");
    container.innerHTML = "";

    for (let lvl = 0; lvl <= 9; lvl++) {
        const realm = realms[lvl];
        const isUnlocked = gameState.unlockedLevels.includes(lvl);
        const isCompleted = gameState.completedLevels.includes(lvl);

        // Count completed steps
        const doneSteps = gameState.completedSteps[lvl].length;
        const totalSteps = Object.keys(realm.steps).length;

        const card = document.createElement("div");
        card.className = `cert-card ${isCompleted ? 'completed' : (isUnlocked ? 'active' : 'locked')}`;
        
        let progressLabel = "LOCKED";
        if (isCompleted) progressLabel = "[✓] CERTIFIED COMPLETE";
        else if (isUnlocked) progressLabel = `${doneSteps} of ${totalSteps} steps complete`;

        // Render sub-lessons inside this Certification Module
        let lessonsHtml = `
            <!-- Lesson 1: Theory Foundations -->
            <div class="lesson-item">
                <div class="lesson-info">
                    <i class="fa-solid fa-circle-check" style="${isUnlocked ? 'color: var(--neon-gold);' : ''}"></i>
                    <div class="lesson-title-block">
                        <span>1. Core Foundations & Theory</span>
                        <p>Fundamental parameters, definitions, and equations.</p>
                    </div>
                </div>
                <div class="lesson-action-block">
                    <span class="badge-tag badge-theory">Theory</span>
                    <button class="lesson-btn" onclick="startSubLesson(${lvl}, 'theory')">
                        ${isUnlocked ? 'START THEORY' : 'LOCKED'}
                    </button>
                </div>
            </div>

            <!-- Lesson 2: Workshop Sandbox Grid (The 30-Step Grid!) -->
            <div class="lesson-item" style="flex-direction: column; align-items: flex-start; gap: 10px;">
                <div style="display:flex; justify-content: space-between; width: 100%; align-items: center;">
                    <div class="lesson-info">
                        <i class="fa-solid fa-circle-play" style="${isUnlocked ? 'color: var(--neon-cyan);' : ''}"></i>
                        <div class="lesson-title-block">
                            <span>2. Capstone Challenge: ${realm.name}</span>
                            <p>Interact, build, compile, and run the pipeline step-by-step.</p>
                        </div>
                    </div>
                    <div class="lesson-action-block">
                        <span class="badge-tag badge-workshop">Workshop</span>
                    </div>
                </div>
                
                <!-- Grid of step buttons (equivalent to the screenshot) -->
                ${isUnlocked ? renderCurriculumStepsGrid(lvl) : ''}
            </div>

            <!-- Lesson 3: Quiz check -->
            <div class="lesson-item">
                <div class="lesson-info">
                    <i class="fa-solid fa-circle-question"></i>
                    <div class="lesson-title-block">
                        <span>3. ${realm.topic} Validation Quiz</span>
                        <p>Test your conceptual understanding of this AI pipeline.</p>
                    </div>
                </div>
                <div class="lesson-action-block">
                    <span class="badge-tag badge-quiz">Quiz</span>
                    <button class="lesson-btn" onclick="startSubLesson(${lvl}, 'quiz')">
                        ${isUnlocked ? 'START QUIZ' : 'LOCKED'}
                    </button>
                </div>
            </div>

            <!-- Lesson 4: Certification Project -->
            <div class="lesson-item">
                <div class="lesson-info">
                    <i class="fa-solid fa-medal"></i>
                    <div class="lesson-title-block">
                        <span>4. Certification Capstone Project</span>
                        <p>Write and deploy the final complete module package.</p>
                    </div>
                </div>
                <div class="lesson-action-block">
                    <span class="badge-tag badge-project">Project</span>
                    <button class="lesson-btn" onclick="startSubLesson(${lvl}, 'project')">
                        ${isUnlocked ? 'START PROJECT' : 'LOCKED'}
                    </button>
                </div>
            </div>
        `;

        card.innerHTML = `
            <div class="cert-header" onclick="toggleModuleAccordion(this)" style="cursor: pointer;">
                <div class="cert-title-info">
                    <span>LEVEL ${lvl} - ${realm.topic}</span>
                    <h3>${realm.certTitle}</h3>
                </div>
                <div class="cert-rewards-meta">
                    <span class="cert-status-badge">${progressLabel}</span>
                    <i class="fa-solid fa-chevron-down module-arrow" style="transition: transform 0.3s; margin-left: 8px;"></i>
                </div>
            </div>
            
            <div class="cert-desc" style="margin-top: 10px;">${realm.lore}</div>
            
            <div class="cert-lessons" style="max-height: 0px; overflow: hidden; transition: max-height 0.4s ease-out; margin-top: 12px;">
                ${lessonsHtml}
            </div>
        `;
        container.appendChild(card);
    }
}

function renderCurriculumStepsGrid(lvlId) {
    let html = `<div class="curriculum-steps-grid">`;
    const completed = gameState.completedSteps[lvlId];
    const totalSteps = Object.keys(realms[lvlId].steps).length;

    for (let step = 1; step <= totalSteps; step++) {
        const isDone = completed.includes(step);
        let statusClass = "";
        
        if (isDone) {
            statusClass = "completed";
        } else if (gameState.activeStep === step && gameState.currentLevelDetail && gameState.currentLevelDetail.id === lvlId) {
            statusClass = "active";
        }

        html += `
            <div class="curriculum-step-box ${statusClass}" onclick="event.stopPropagation(); startWorkshopStep(${lvlId}, ${step})">
                ${step}
            </div>
        `;
    }
    html += `</div>`;
    return html;
}

function toggleModuleAccordion(headerElement) {
    synth.playClick();
    const card = headerElement.parentElement;
    const lessonsBlock = card.querySelector(".cert-lessons");
    const arrow = card.querySelector(".module-arrow");

    if (lessonsBlock.style.maxHeight === "0px" || !lessonsBlock.style.maxHeight) {
        // Expand
        lessonsBlock.style.maxHeight = `${lessonsBlock.scrollHeight + 150}px`;
        arrow.style.transform = "rotate(180deg)";
        voiceSystem.speak(`Expanding certification modules for level ${card.className.includes("locked") ? "locked" : "active"} track.`);
    } else {
        // Collapse
        lessonsBlock.style.maxHeight = "0px";
        arrow.style.transform = "rotate(0deg)";
    }
}

function startSubLesson(lvlId, type) {
    synth.playClick();
    if (!gameState.unlockedLevels.includes(lvlId)) {
        synth.playFail();
        voiceSystem.speak("This certification module is currently locked.");
        return;
    }

    if (type === "theory") {
        voiceSystem.speak("Loading Core Foundations theory check. Review glossary scrolls for details.");
        enterWorkspace(lvlId, 1); // Starts step 1
    } else if (type === "quiz") {
        voiceSystem.speak("Loading conceptual certification validation quiz.");
        enterWorkspace(lvlId, 15); // Starts Step 15
    } else if (type === "project") {
        voiceSystem.speak("Loading final Capstone Certification project sandbox.");
        enterWorkspace(lvlId, 30); // Starts Step 30 (Final compilation step)
    }
}

function startWorkshopStep(lvlId, stepId) {
    enterWorkspace(lvlId, stepId);
}

// --- 8. WORKSPACE VIEWS TRANSITIONS ---

function enterWorkspace(lvlId, stepId) {
    const realm = realms[lvlId];
    gameState.currentLevelDetail = realm;
    gameState.activeStep = stepId;

    synth.playClick();

    // Toggle views
    document.getElementById("curriculum-view").style.display = "none";
    document.getElementById("workspace-view").style.display = "grid";

    // Show Steps grid container
    document.getElementById("workspace-steps-container").style.display = "block";

    // Populate metadata details
    document.getElementById("workspace-lvl-tag").textContent = `LEVEL ${lvlId} - STEP ${stepId}`;
    document.getElementById("workspace-title").textContent = realm.steps[stepId].title;
    document.getElementById("workspace-subtitle").textContent = realm.certTitle;
    document.getElementById("workspace-lore").textContent = realm.lore;
    document.getElementById("workspace-directions").innerHTML = realm.steps[stepId].directions;

    // Set background image banner
    document.getElementById("workspace-header-bg").style.backgroundImage = `url('${realm.image}')`;

    // Tech tags
    const tagsContainer = document.getElementById("workspace-tech-tags");
    tagsContainer.innerHTML = "";
    realm.techStack.forEach(tech => {
        const tag = document.createElement("div");
        tag.className = "tech-tag";
        tag.textContent = tech;
        tagsContainer.appendChild(tag);
    });

    // Glossary
    const glossaryContainer = document.getElementById("study-scroll-content");
    glossaryContainer.innerHTML = "";
    realm.glossary.forEach(item => {
        const row = document.createElement("div");
        row.className = "glossary-item";
        row.innerHTML = `
            <div class="glossary-term">${item.term}</div>
            <div class="glossary-definition">${item.def}</div>
        `;
        glossaryContainer.appendChild(row);
    });
    
    // Collapse study scrolls initially
    glossaryContainer.style.maxHeight = "0px";
    document.getElementById("study-scroll-arrow").style.transform = "rotate(0deg)";

    // Populate Sample Code & Solution Answer
    const solutionCodeEl = document.getElementById("workspace-solution-code");
    if (solutionCodeEl) {
        solutionCodeEl.textContent = realm.steps[stepId].solutionCode;
    }

    // Populate Complete Sample Program on the right panel
    let linesArr = [];
    if (lvlId === 0) linesArr = level0Lines;
    else if (lvlId === 1) linesArr = level1Lines;
    else if (lvlId === 2) linesArr = level2Lines;
    else if (lvlId === 3) linesArr = level3Lines;
    else if (lvlId === 4) linesArr = level4Lines;
    else if (lvlId === 5) linesArr = level5Lines;
    else if (lvlId === 6) linesArr = level6Lines;
    else if (lvlId === 7) linesArr = level7Lines;
    else if (lvlId === 8) linesArr = level8Lines;
    else if (lvlId === 9) linesArr = level9Lines;

    let fullSample = "";
    for (let j = 0; j < stepId; j++) {
        const isCurrent = (j === stepId - 1);
        if (isCurrent) {
            fullSample += linesArr[j].code + "   # <-- Add this line!\n";
        } else {
            fullSample += linesArr[j].code + "\n";
        }
    }

    const sampleStepEl = document.getElementById("workspace-sample-program-step");
    const sampleCodeEl = document.getElementById("workspace-sample-program-code");
    if (sampleStepEl) sampleStepEl.textContent = stepId;
    if (sampleCodeEl) sampleCodeEl.textContent = fullSample;

    // Update Steps Grid inside workspace instructions
    updateWorkspaceStepsGrid();

    // Code editor text setup
    const codeKey = `${lvlId}_${stepId}`;
    const code = gameState.codeSandboxCodes[codeKey] || realm.steps[stepId].starterCode;
    const editor = document.getElementById("code-editor");
    editor.value = code;
    updateLineNumbers();

    // Reset console
    const terminal = document.getElementById("terminal-body");
    terminal.innerHTML = `<div class="terminal-log system">System ready. Loaded Step ${stepId}. Waiting for test run...</div>`;

    // Hide Hint box
    const hintBox = document.getElementById("workspace-hint-box");
    hintBox.style.display = "none";
    hintBox.innerHTML = "";

    // Render FCC test cases checklists
    renderWorkspaceTestsList();

    // Trigger welcoming vocal advice
    voiceSystem.speak(`Loading Step ${stepId}: ${realm.steps[stepId].title}. Complete the directions and run tests.`);
}

function updateWorkspaceStepsGrid() {
    const grid = document.getElementById("workspace-steps-grid");
    grid.innerHTML = "";
    
    const lvlId = gameState.currentLevelDetail.id;
    const completed = gameState.completedSteps[lvlId];
    const totalSteps = Object.keys(gameState.currentLevelDetail.steps).length;
    
    document.getElementById("workspace-step-fraction").textContent = `Step ${gameState.activeStep} of ${totalSteps}`;

    for (let step = 1; step <= totalSteps; step++) {
        const box = document.createElement("div");
        const isDone = completed.includes(step);
        const isActive = gameState.activeStep === step;
        
        let statusClass = "";
        if (isDone) statusClass = "completed";
        else if (isActive) statusClass = "active";

        box.className = `step-box ${statusClass}`;
        box.textContent = step;
        
        box.addEventListener("click", () => {
            enterWorkspace(lvlId, step);
        });

        grid.appendChild(box);
    }
}

function exitWorkspace() {
    synth.playClick();
    document.getElementById("workspace-view").style.display = "none";
    document.getElementById("curriculum-view").style.display = "flex";
    gameState.currentLevelDetail = null;

    // Refresh Curriculum metrics
    renderCurriculumList();
    updateStatsUI();
}

function toggleStudyScroll() {
    synth.playClick();
    const content = document.getElementById("study-scroll-content");
    const arrow = document.getElementById("study-scroll-arrow");

    if (content.style.maxHeight === "0px" || !content.style.maxHeight) {
        content.style.maxHeight = `${content.scrollHeight}px`;
        arrow.style.transform = "rotate(180deg)";
        voiceSystem.speak("Opening study scrolls glossary.");
    } else {
        content.style.maxHeight = "0px";
        arrow.style.transform = "rotate(0deg)";
    }
}

function consultMentorHint() {
    const realm = gameState.currentLevelDetail;
    const stepId = gameState.activeStep;
    const hintBox = document.getElementById("workspace-hint-box");
    if (!realm) return;

    synth.playClick();
    
    hintBox.style.display = "block";
    hintBox.innerHTML = `
        <div style="font-weight: bold; color: var(--neon-gold); margin-bottom: 6px;">
            <i class="fa-solid fa-wand-magic-sparkles"></i> AETHERA'S ADVICE:
        </div>
        <div>${realm.steps[stepId].hint}</div>
    `;

    // Voice tutor advice
    voiceSystem.speak("Mentor advice updated. Check the hint details box on the bottom left.");
}

function renderWorkspaceTestsList(testResults = {}) {
    const container = document.getElementById("fcc-tests-list");
    container.innerHTML = "";
    
    const realm = gameState.currentLevelDetail;
    const stepId = gameState.activeStep;
    if (!realm) return;

    realm.steps[stepId].tests.forEach(test => {
        const item = document.createElement("div");
        const status = testResults[test.id]; // "passed", "failed", or undefined (pending)
        
        let statusClass = "";
        let iconHtml = `<i class="fa-regular fa-circle"></i>`; // pending

        if (status === "passed") {
            statusClass = "passed";
            iconHtml = `<i class="fa-solid fa-circle-check"></i>`;
        } else if (status === "failed") {
            statusClass = "failed";
            iconHtml = `<i class="fa-solid fa-circle-xmark"></i>`;
        }

        item.className = `fcc-test-item ${statusClass}`;
        item.innerHTML = `
            <div class="test-status-icon">${iconHtml}</div>
            <div class="test-desc-text">${test.desc}</div>
        `;
        container.appendChild(item);
    });
}

// --- 9. FREECODECAMP UNIT TEST RUNNER ---

function runFCCUnitTests() {
    const realm = gameState.currentLevelDetail;
    const stepId = gameState.activeStep;
    const totalSteps = Object.keys(realm.steps).length;
    if (!realm) return;

    synth.playClick();

    const code = document.getElementById("code-editor").value;
    const codeKey = `${realm.id}_${stepId}`;
    gameState.codeSandboxCodes[codeKey] = code;

    const terminal = document.getElementById("terminal-body");
    terminal.innerHTML = ""; 

    appendTerminalLog(`$ pytest tests/test_step_${stepId}.py`, "system");
    appendTerminalLog("Checking assertions against code sandbox templates...", "info");

    setTimeout(() => {
        let testResults = {};
        let allPassed = true;
        let firstFailedTest = null;

        // Verify active step tests
        realm.steps[stepId].tests.forEach(test => {
            const passed = test.check(code);
            testResults[test.id] = passed ? "passed" : "failed";
            
            if (!passed) {
                allPassed = false;
                if (!firstFailedTest) firstFailedTest = test;
            }
        });

        // Re-render checklist checkboxes
        renderWorkspaceTestsList(testResults);

        if (!allPassed) {
            // Failure logic
            synth.playFail();
            appendTerminalLog("==========================================", "system");
            appendTerminalLog(`[FAIL] Test cases failed: "${firstFailedTest.desc.replace(/<\/?[^>]+(>|$)/g, "")}"`, "fail");
            appendTerminalLog(`TIP: ${firstFailedTest.tip}`, "fail");
            appendTerminalLog(realm.steps[stepId].errorTrace, "fail");
            
            voiceSystem.speak(`Test verification failed. ${firstFailedTest.tip}. Consult the mentor if you need helper code.`);
            return;
        }

        // All test cases passed!
        if (stepId < totalSteps) {
            // Step success (progress to next step)
            synth.playSuccess();
            appendTerminalLog(`[PASS] Step ${stepId} verified successfully!`, "success");
            appendTerminalLog("Unlocking next step. Click next step or continue...", "success");
            
            // Save step progress
            if (!gameState.completedSteps[realm.id].includes(stepId)) {
                gameState.completedSteps[realm.id].push(stepId);
            }
            
            // Update workspace grid
            updateWorkspaceStepsGrid();

            voiceSystem.speak(`Step ${stepId} complete. Ready for Step ${stepId + 1}.`);
            
            // Auto advance after 1.8 seconds
            setTimeout(() => {
                enterWorkspace(realm.id, stepId + 1);
            }, 1800);
        } else {
            // Full capstone workshop completion -> MLOps Deployment simulation
            if (!gameState.completedSteps[realm.id].includes(totalSteps)) {
                gameState.completedSteps[realm.id].push(totalSteps);
            }
            updateWorkspaceStepsGrid();
            
            runFCCMLOpsDeployment(realm);
        }

    }, 1200);
}

function runFCCMLOpsDeployment(realm) {
    appendTerminalLog("All 30 workshop steps completed! Starting MLOps build...", "success");

    let delay = 1000;

    setTimeout(() => {
        appendTerminalLog("$ pip install -r requirements.txt --quiet", "system");
        appendTerminalLog("Downloading and compiling package indexes...", "info");
    }, delay);

    delay += 1200;

    setTimeout(() => {
        appendTerminalLog("$ pytest tests/ -v", "system");
        appendTerminalLog("[TEST 1/5] Checking causal loaders -> PASSED", "success");
        appendTerminalLog("[TEST 2/5] Checking DB integrations -> PASSED", "success");
        appendTerminalLog("[TEST 3/5] Checking query parameters -> PASSED", "success");
        appendTerminalLog("[TEST 4/5] Checking LLM invoke callbacks -> PASSED", "success");
        appendTerminalLog("[TEST 5/5] Checking end-to-end wrapper pipelines -> PASSED", "success");
        synth.playOsc(1000, 0.1, "sine", 0.05);
    }, delay);

    delay += 2000;

    setTimeout(() => {
        appendTerminalLog(`$ docker build -t aether-ai/cert-service:v${realm.id}.0 .`, "system");
        appendTerminalLog("STEP 1/4: FROM python:3.11-slim", "info");
        appendTerminalLog("STEP 2/4: COPY . /app && WORKDIR /app", "info");
        appendTerminalLog("STEP 3/4: RUN pip install -r requirements.txt", "info");
        appendTerminalLog("STEP 4/4: EXPOSE 8080 && CMD ['python', 'main.py']", "info");
        appendTerminalLog("Docker container successfully built -> Cache saved", "success");
    }, delay);

    delay += 1800;

    setTimeout(() => {
        appendTerminalLog("$ kubectl apply -f k8s-deployment.yaml", "system");
        appendTerminalLog("deployment.apps/realm-deployment created", "info");
        appendTerminalLog("service/realm-service created", "info");
        appendTerminalLog("Validating cluster endpoints...", "info");
    }, delay);

    delay += 1500;

    setTimeout(() => {
        appendTerminalLog("Endpoint online: http://aether-cluster.local:8080/api/v1/infer", "success");
        appendTerminalLog("P99 Latency: 12.4ms | Coverage: 100% | capacity: 10,000 RPS", "success");
        appendTerminalLog("================================================================", "system");
        appendTerminalLog("BUILD SUCCESSFUL. CERTIFICATE GENERATED.", "success");
        synth.playSuccess();

        // Award completion benefits
        completeCertificationLevel(realm.id);
    }, delay);
}

function appendTerminalLog(text, type) {
    const terminal = document.getElementById("terminal-body");
    const log = document.createElement("div");
    log.className = `terminal-log ${type}`;
    log.textContent = text;
    terminal.appendChild(log);
    terminal.scrollTop = terminal.scrollHeight;
}

function completeCertificationLevel(lvlNum) {
    const realm = realms[lvlNum];
    if (gameState.completedLevels.includes(lvlNum)) return;

    gameState.completedLevels.push(lvlNum);
    
    // Unlock next level certification
    const nextLvl = lvlNum + 1;
    if (nextLvl <= 5 && !gameState.unlockedLevels.includes(nextLvl)) {
        gameState.unlockedLevels.push(nextLvl);
        setTimeout(() => {
            synth.playUnlock();
        }, 1000);
    }

    // Award rewards
    gameState.xp += realm.xpReward;
    gameState.salary = realm.salaryReward;
    
    if (lvlNum === 1) {
        gameState.stats.coding += 15;
        gameState.stats.dl += 10;
        gameState.achievements.find(a => a.id === "nlp").unlocked = true;
    } else if (lvlNum === 2) {
        gameState.stats.math += 15;
        gameState.stats.dl += 15;
        gameState.achievements.find(a => a.id === "cv").unlocked = true;
    } else if (lvlNum === 3) {
        gameState.stats.math += 10;
        gameState.stats.coding += 10;
        gameState.stats.dl += 20;
        gameState.achievements.find(a => a.id === "rl").unlocked = true;
    } else if (lvlNum === 4) {
        gameState.stats.coding += 15;
        gameState.stats.ops += 15;
        gameState.achievements.find(a => a.id === "swarm").unlocked = true;
    } else if (lvlNum === 5) {
        gameState.stats.math += 15;
        gameState.stats.ops += 25;
        gameState.achievements.find(a => a.id === "deploy").unlocked = true;
    }

    const nextLevelThreshold = (gameState.level + 1) * 100;
    if (gameState.xp >= nextLevelThreshold) {
        gameState.level++;
        gameState.title = realms[gameState.level] ? realms[gameState.level].rankTitle : "Edge AI Archmage";
        
        setTimeout(() => {
            triggerLevelUpPopup();
        }, 2200);
    }

    updateStatsUI();
    updateAchievementsUI();
    updateLeaderboardUI();
}

function triggerLevelUpPopup() {
    synth.playLevelUp();
    
    document.getElementById("new-rank-val").textContent = gameState.title;
    document.getElementById("new-salary-val").textContent = `$${gameState.salary.toLocaleString()}`;
    
    document.getElementById("levelup-backdrop").classList.add("open");
    voiceSystem.speak(`Certification unlocked! Congratulations, Neophyte. You have officially upgraded your class to a ${gameState.title}!`);
}

// --- 10. EDITOR UTILITIES ---
function updateLineNumbers() {
    const editor = document.getElementById("code-editor");
    const lines = editor.value.split("\n").length;
    const container = document.getElementById("editor-line-numbers");
    container.innerHTML = "";
    for (let i = 1; i <= lines; i++) {
        const num = document.createElement("div");
        num.textContent = i;
        container.appendChild(num);
    }
}

// --- 11. INTERFACE ELEMENT LISTENERS ---

function updateClock() {
    const time = new Date().toTimeString().split(" ")[0];
    document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

function updateUserTranscript(text) {
    document.getElementById("user-transcript").textContent = text;
}
function updateSystemResponse(text) {
    document.getElementById("system-response").textContent = text;
}

function updateHeaderToggles() {
    const audioBtn = document.getElementById("audio-toggle");
    const voiceBtn = document.getElementById("voice-toggle");

    if (gameState.audioEnabled) {
        audioBtn.classList.remove("active");
        audioBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    } else {
        audioBtn.classList.add("active");
        audioBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
    }

    if (gameState.voiceEnabled) {
        voiceBtn.classList.remove("active");
        voiceBtn.innerHTML = `<i class="fa-solid fa-comment-dots"></i>`;
    } else {
        voiceBtn.classList.add("active");
        voiceBtn.innerHTML = `<i class="fa-solid fa-comment-slash"></i>`;
    }
}

document.getElementById("audio-toggle").addEventListener("click", () => {
    gameState.audioEnabled = !gameState.audioEnabled;
    synth.playClick();
    updateHeaderToggles();
});

document.getElementById("voice-toggle").addEventListener("click", () => {
    gameState.voiceEnabled = !gameState.voiceEnabled;
    synth.playClick();
    updateHeaderToggles();
});

document.getElementById("mic-btn").addEventListener("click", () => {
    voiceSystem.toggleListening();
});

document.getElementById("levelup-close-btn").addEventListener("click", () => {
    synth.playClick();
    document.getElementById("levelup-backdrop").classList.remove("open");
});

document.getElementById("code-editor").addEventListener("input", updateLineNumbers);
document.getElementById("code-editor").addEventListener("scroll", () => {
    document.getElementById("editor-line-numbers").scrollTop = document.getElementById("code-editor").scrollTop;
});

// Bind Workspace Buttons
document.getElementById("back-curriculum-btn").addEventListener("click", exitWorkspace);
document.getElementById("workspace-hint-btn").addEventListener("click", consultMentorHint);
document.getElementById("workspace-run-btn").addEventListener("click", runFCCUnitTests);
document.getElementById("study-scroll-header").addEventListener("click", toggleStudyScroll);

document.getElementById("reset-code-btn").addEventListener("click", () => {
    if (gameState.currentLevelDetail) {
        synth.playClick();
        const realm = gameState.currentLevelDetail;
        const stepId = gameState.activeStep;
        document.getElementById("code-editor").value = realm.steps[stepId].starterCode;
        updateLineNumbers();
        appendTerminalLog(`Reset code sandbox to step ${stepId} boilerplate templates.`, "system");
    }
});

// Key bindings (Ctrl + Enter to run tests)
window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
        if (gameState.currentLevelDetail) {
            e.preventDefault();
            runFCCUnitTests();
        }
    }
});

// --- 13. LOGIN GATEWAY AUTHENTICATION CONTROLLER ---
let authMode = "login";

function toggleAuthMode() {
    synth.playClick();
    const title = document.getElementById("login-card-title");
    const subtitle = document.getElementById("login-card-subtitle");
    const nameGroup = document.getElementById("reg-name-group");
    const toggleLink = document.getElementById("auth-toggle-link");
    const submitBtn = document.getElementById("auth-submit-btn");
    const alertBox = document.getElementById("login-alert-box");

    alertBox.style.display = "none";

    if (authMode === "login") {
        authMode = "register";
        title.textContent = "REGISTER PROFILE";
        subtitle.textContent = "CREATING LOCAL COGNITIVE PROFILE";
        nameGroup.style.display = "block";
        toggleLink.textContent = "BACK TO AUTHENTICATION";
        submitBtn.textContent = "CREATE PROFILE & ENTER";
    } else {
        authMode = "login";
        title.textContent = "AETHER_AI ACADEMY";
        subtitle.textContent = "SECURE NEOPHYTE AUTHENTICATION GATEWAY";
        nameGroup.style.display = "none";
        toggleLink.textContent = "REGISTER LOCAL PROFILE";
        submitBtn.textContent = "AUTHENTICATE SYSTEM";
    }
}

function handleAuthSubmit(event) {
    if (event) event.preventDefault();

    const nameVal = document.getElementById("auth-name").value.trim();
    const emailVal = document.getElementById("auth-email").value.trim().toLowerCase();
    const passVal = document.getElementById("auth-password").value;
    const alertBox = document.getElementById("login-alert-box");

    if (authMode === "register") {
        if (!nameVal || !emailVal || !passVal) {
            synth.playFail();
            alertBox.textContent = "Error: All registration fields are required.";
            alertBox.style.display = "block";
            return;
        }

        // Save profile
        const user = { name: nameVal, email: emailVal, password: passVal };
        localStorage.setItem("aether_user", JSON.stringify(user));

        // Unlock dashboard
        document.getElementById("player-name").textContent = nameVal;
        document.getElementById("login-view").style.display = "none";
        document.getElementById("app-view").style.display = "block";

        synth.playUnlock();
        voiceSystem.speak(`Profile registered successfully. Welcome to Aether AI Academy, ${nameVal}. Select a certification module to begin your training.`);
    } else {
        // Check default credentials
        let authenticated = false;
        let displayName = "Admin Neophyte";

        if (emailVal === "admin@aether.ai" && passVal === "admin123") {
            authenticated = true;
        } else {
            // Check stored credentials
            const stored = localStorage.getItem("aether_user");
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed.email === emailVal && parsed.password === passVal) {
                    authenticated = true;
                    displayName = parsed.name;
                }
            }
        }

        if (authenticated) {
            document.getElementById("player-name").textContent = displayName;
            document.getElementById("login-view").style.display = "none";
            document.getElementById("app-view").style.display = "block";

            synth.playSuccess();
            voiceSystem.speak(`Authentication successful. Welcome back to Aether AI Academy, ${displayName}. Select a certification module to begin your training.`);
        } else {
            synth.playFail();
            alertBox.textContent = "Authentication failed. Incorrect email or passcode.";
            alertBox.style.display = "block";
        }
    }
}

// --- 14. VISUAL AI LABS TAB & SIMULATOR CONTROLLER ---
let activeLabId = 1;
let labAnimRunning = true;
let labAnimFrame = 0;

function switchHomeTab(tabName) {
    synth.playClick();
    const tabCurriculum = document.getElementById("tab-curriculum");
    const tabRoadmap = document.getElementById("tab-roadmap");
    const tabVisualLabs = document.getElementById("tab-visual-labs");
    
    const contentCurriculum = document.getElementById("curriculum-tab-content");
    const contentRoadmap = document.getElementById("roadmap-tab-content");
    const contentVisualLabs = document.getElementById("visual-labs-tab-content");

    // Hide all contents
    contentCurriculum.style.display = "none";
    contentRoadmap.style.display = "none";
    contentVisualLabs.style.display = "none";

    // De-activate all tab buttons
    tabCurriculum.classList.remove("active");
    tabRoadmap.classList.remove("active");
    tabVisualLabs.classList.remove("active");

    if (tabName === "curriculum") {
        tabCurriculum.classList.add("active");
        contentCurriculum.style.display = "block";
    } else if (tabName === "roadmap") {
        tabRoadmap.classList.add("active");
        contentRoadmap.style.display = "flex";
        
        // Render levels lists and load default Level 0
        renderRoadmapLevelsList();
        loadRoadmapLevel(0);
    } else {
        tabVisualLabs.classList.add("active");
        contentVisualLabs.style.display = "flex";
        loadVisualLab(1);
    }
}

function loadVisualLab(labId) {
    synth.playClick();
    activeLabId = labId;

    // Toggle active classes on lab selection buttons
    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById(`lab-btn-${i}`);
        if (btn) {
            if (i === labId) btn.classList.add("active");
            else btn.classList.remove("active");
        }
    }

    // Set explanation text & controls
    const explainText = document.getElementById("lab-explanation-text");
    const controlsContainer = document.getElementById("lab-controls-container");
    const consoleLogs = document.getElementById("lab-console-logs");
    
    consoleLogs.innerHTML = `<div class="lab-log-entry system">Loaded Lab Module ${labId}. Ready for simulator parameters test...</div>`;

    if (labId === 1) {
        explainText.textContent = "Retrieval-Augmented Generation (RAG) bridges LLM knowledge gaps. The query encodes to a vector, cosine matches are retrieved from the index, and appended to the prompt context. The prompt instructs the model to answer precisely without hallucinating.";
        controlsContainer.innerHTML = `
            <div class="lab-slider-group">
                <label>Cosine Similarity Threshold: <span id="val-rag-thresh">0.75</span></label>
                <input type="range" class="lab-slider" id="slider-rag-thresh" min="0.1" max="0.9" step="0.05" value="0.75" oninput="document.getElementById('val-rag-thresh').textContent = this.value">
            </div>
            <div class="lab-slider-group">
                <label>Top-K Documents Retrieved: <span id="val-rag-k">3</span></label>
                <input type="range" class="lab-slider" id="slider-rag-k" min="1" max="5" step="1" value="3" oninput="document.getElementById('val-rag-k').textContent = this.value">
            </div>
        `;
    } else if (labId === 2) {
        explainText.textContent = "Diffusion pipelines start with random Gaussian noise. Guided by CLIP text embeddings and strength limits, the network iteratively denoises the latent space over scheduled steps, reconstructing clean, coherent pixels.";
        controlsContainer.innerHTML = `
            <div class="lab-slider-group">
                <label>Denoising Strength: <span id="val-sd-strength">0.75</span></label>
                <input type="range" class="lab-slider" id="slider-sd-strength" min="0.1" max="1.0" step="0.05" value="0.75" oninput="document.getElementById('val-sd-strength').textContent = this.value">
            </div>
            <div class="lab-slider-group">
                <label>Guidance Scale (CFG): <span id="val-sd-cfg">7.5</span></label>
                <input type="range" class="lab-slider" id="slider-sd-cfg" min="1.0" max="15.0" step="0.5" value="7.5" oninput="document.getElementById('val-sd-cfg').textContent = this.value">
            </div>
        `;
    } else if (labId === 3) {
        explainText.textContent = "RL agents learn policy paths via trials. Step actions trigger environment rewards or penalties. Q-values or PPO gradient approximations update parameters, reinforcing positive paths while clipping high-variance shifts.";
        controlsContainer.innerHTML = `
            <div class="lab-slider-group">
                <label>Learning Rate (Alpha): <span id="val-rl-lr">0.05</span></label>
                <input type="range" class="lab-slider" id="slider-rl-lr" min="0.01" max="0.50" step="0.01" value="0.05" oninput="document.getElementById('val-rl-lr').textContent = this.value">
            </div>
            <div class="lab-slider-group">
                <label>Exploration Rate (Epsilon): <span id="val-rl-eps">0.20</span></label>
                <input type="range" class="lab-slider" id="slider-rl-eps" min="0.01" max="1.00" step="0.05" value="0.20" oninput="document.getElementById('val-rl-eps').textContent = this.value">
            </div>
        `;
    } else if (labId === 4) {
        explainText.textContent = "Crew processes orchestrate parallel LLM pipelines. Task outputs from the Architect are structured into schemas, feeding directly into the Developer's context, followed by the QA Validator running code checks.";
        controlsContainer.innerHTML = `
            <div class="lab-slider-group">
                <label>Agent Swarm Size: <span id="val-swarm-count">3</span></label>
                <input type="range" class="lab-slider" id="slider-swarm-count" min="2" max="5" step="1" value="3" oninput="document.getElementById('val-swarm-count').textContent = this.value">
            </div>
            <div class="lab-slider-group">
                <label>Max Iteration Depth: <span id="val-swarm-iter">5</span></label>
                <input type="range" class="lab-slider" id="slider-swarm-iter" min="1" max="10" step="1" value="5" oninput="document.getElementById('val-swarm-iter').textContent = this.value">
            </div>
        `;
    } else if (labId === 5) {
        explainText.textContent = "Quantization downsamples high-precision models to INT4. Calibrated datasets ensure mathematical loss curves are smoothed. Squeezing layers optimizes memory footprint for instant edge device execution.";
        controlsContainer.innerHTML = `
            <div class="lab-slider-group">
                <label>Quantization Bits: <span id="val-quant-bits">4-bit</span></label>
                <input type="range" class="lab-slider" id="slider-quant-bits" min="2" max="8" step="2" value="4" oninput="document.getElementById('val-quant-bits').textContent = this.value + '-bit'">
            </div>
            <div class="lab-slider-group">
                <label>Calibration Batch Size: <span id="val-quant-batch">256</span></label>
                <input type="range" class="lab-slider" id="slider-quant-batch" min="128" max="1024" step="128" value="256" oninput="document.getElementById('val-quant-batch').textContent = this.value">
            </div>
        `;
    }
}

function toggleLabAnimation() {
    synth.playClick();
    labAnimRunning = !labAnimRunning;
    const icon = document.getElementById("play-lab-icon");
    const text = document.getElementById("play-lab-text");

    if (labAnimRunning) {
        icon.className = "fa-solid fa-pause";
        text.textContent = "PAUSE";
        animateLab();
    } else {
        icon.className = "fa-solid fa-play";
        text.textContent = "PLAY";
    }
}

function executeLabExperiment() {
    synth.playClick();
    const consoleLogs = document.getElementById("lab-console-logs");
    consoleLogs.innerHTML = "";

    appendLabLog("Initializing lab environment...", "system");
    synth.playOsc(800, 0.08, "triangle", 0.05);

    setTimeout(() => {
        if (activeLabId === 1) {
            const thresh = parseFloat(document.getElementById("slider-rag-thresh").value);
            const k = parseInt(document.getElementById("slider-rag-k").value);
            
            appendLabLog(`$ index.similarity_search(query, k=${k}, threshold=${thresh})`, "system");
            appendLabLog(`Vector DB search complete. Retrieved ${k} context blocks above similarity threshold ${thresh}.`, "info");
            
            const accuracy = Math.floor(90 + (thresh * 10) - (k * 1.5));
            setTimeout(() => {
                appendLabLog(`[RESULT] LLM context fed: ${k * 180} tokens. Accuracy rating: ${accuracy}%. Hallucination risk: ${100 - accuracy}%.`, "success");
                synth.playSuccess();
            }, 800);

        } else if (activeLabId === 2) {
            const strength = parseFloat(document.getElementById("slider-sd-strength").value);
            const cfg = parseFloat(document.getElementById("slider-sd-cfg").value);

            appendLabLog(`$ diffusers.stylize_image(image, strength=${strength}, guidance_scale=${cfg})`, "system");
            appendLabLog("Executing image-to-image style transfer on canvas...", "info");

            const ssim = (1 - strength * 0.4 + cfg * 0.02).toFixed(2);
            setTimeout(() => {
                appendLabLog(`[RESULT] Denoising complete. Image structural similarity (SSIM): ${ssim}. Output rendering saved.`, "success");
                synth.playSuccess();
            }, 800);

        } else if (activeLabId === 3) {
            const lr = parseFloat(document.getElementById("slider-rl-lr").value);
            const eps = parseFloat(document.getElementById("slider-rl-eps").value);

            appendLabLog(`$ model.learn(learning_rate=${lr}, epsilon=${eps})`, "system");
            appendLabLog("Training agent combat policies in Gymnasium simulation...", "info");

            const winRate = Math.floor(75 + (0.1 / (Math.abs(lr - 0.08) + 0.05)) - (eps * 10));
            setTimeout(() => {
                appendLabLog(`[RESULT] PPO optimization complete. Golem training loss: 0.0042. Combat win rate: ${winRate}%.`, "success");
                synth.playSuccess();
            }, 800);

        } else if (activeLabId === 4) {
            const agents = parseInt(document.getElementById("slider-swarm-count").value);
            const iter = parseInt(document.getElementById("slider-swarm-iter").value);

            appendLabLog(`$ crew.kickoff(agents_count=${agents}, max_iterations=${iter})`, "system");
            appendLabLog("Orchestrating agent collaboration swarm pipelines...", "info");

            const runtime = agents * 1420 - iter * 120;
            const success = Math.min(Math.floor(65 + iter * 4 - agents * 3), 100);
            setTimeout(() => {
                appendLabLog(`[RESULT] Swarm process complete. Total runtime: ${runtime}ms. Task completion success: ${success}%.`, "success");
                synth.playSuccess();
            }, 800);

        } else if (activeLabId === 5) {
            const bits = parseInt(document.getElementById("slider-quant-bits").value);
            const batch = parseInt(document.getElementById("slider-quant-batch").value);

            appendLabLog(`$ optimum.quantize(bits=${bits}, calibration_batch=${batch})`, "system");
            appendLabLog("Squeezing float16 weights into quantized crates...", "info");

            const compression = (16 / bits).toFixed(1);
            const speedup = (bits === 2 ? 4.2 : (bits === 4 ? 3.1 : 1.8));
            setTimeout(() => {
                appendLabLog(`[RESULT] GPTQ quantization complete. Memory compression: ${compression}X. Inference speedup: ${speedup}X.`, "success");
                synth.playSuccess();
            }, 800);
        }
    }, 1000);
}

function appendLabLog(text, type) {
    const logs = document.getElementById("lab-console-logs");
    const entry = document.createElement("div");
    entry.className = `lab-log-entry ${type}`;
    entry.textContent = text;
    logs.appendChild(entry);
    logs.scrollTop = logs.scrollHeight;
}

function animateLab() {
    if (!labAnimRunning) return;
    requestAnimationFrame(animateLab);

    const canvas = document.getElementById("lab-animation-canvas");
    if (!canvas || canvas.offsetParent === null) return;
    
    const ctx = canvas.getContext("2d");
    
    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    labAnimFrame++;

    const w = canvas.width;
    const h = canvas.height;
    const midY = h / 2;

    if (activeLabId === 1) {
        // --- RAG ANIMATION ---
        ctx.fillStyle = "rgba(0, 240, 255, 0.15)";
        ctx.strokeStyle = "var(--neon-cyan)";
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(45, midY, 18, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.font = "8px var(--font-cyber)"; ctx.fillText("USER", 34, midY + 3);

        ctx.fillStyle = "rgba(255, 215, 0, 0.1)";
        ctx.strokeStyle = "var(--neon-gold)";
        ctx.beginPath(); ctx.rect(w/2 - 25, midY - 24, 50, 48); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.fillText("VECTOR DB", w/2 - 22, midY + 3);

        ctx.fillStyle = "rgba(189, 0, 255, 0.15)";
        ctx.strokeStyle = "var(--neon-purple)";
        ctx.beginPath(); ctx.arc(w - 45, midY, 18, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.fillText("LLM ENGINE", w - 70, midY + 3);

        const cycle = labAnimFrame % 150;
        if (cycle < 50) {
            const pct = cycle / 50;
            const x = 45 + (w/2 - 25 - 45) * pct;
            ctx.fillStyle = "var(--neon-cyan)";
            ctx.beginPath(); ctx.arc(x, midY, 4, 0, Math.PI*2); ctx.fill();
        } else if (cycle >= 50 && cycle < 100) {
            const pct = (cycle - 50) / 50;
            ctx.strokeStyle = "var(--neon-gold)";
            ctx.beginPath(); ctx.arc(w/2, midY, 20 + pct*10, 0, Math.PI*2); ctx.stroke();

            const x = w/2 + 25 + (w - 45 - (w/2 + 25)) * pct;
            ctx.fillStyle = "var(--neon-gold)";
            ctx.beginPath(); ctx.arc(x, midY - 6, 4, 0, Math.PI*2); ctx.fill();
        } else {
            const pct = (cycle - 100) / 50;
            const x = (w - 45) - ((w - 45) - 45) * pct;
            ctx.fillStyle = "var(--neon-purple)";
            ctx.beginPath(); ctx.arc(x, midY + 6, 4, 0, Math.PI*2); ctx.fill();
        }
    } else if (activeLabId === 2) {
        // --- DIFFUSION SCANNING ---
        const size = 70;
        const startX = Math.floor(w/2 - size/2);
        const startY = Math.floor(midY - size/2);
        const stepRatio = (labAnimFrame % 180) / 180;

        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(startX - 2, startY - 2, size + 4, size + 4);
        ctx.strokeStyle = "var(--border-color)";
        ctx.strokeRect(startX - 2, startY - 2, size + 4, size + 4);

        const imgData = ctx.createImageData(size, size);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random() * 255 * (1 - stepRatio);
            const pixelIdx = i / 4;
            const px = pixelIdx % size;
            const py = Math.floor(pixelIdx / size);
            
            const cx = size / 2;
            const cy = size / 2;
            const dist = Math.sqrt((px - cx) * (px - cx) + (py - cy) * (py - cy));
            const shapeVal = dist < size * 0.35 ? 240 : 0;

            const r = shapeVal * stepRatio + noise;
            const g = shapeVal * stepRatio * 0.4 + noise * 0.5;
            const b = shapeVal * stepRatio * 0.8 + noise;

            data[i] = r;
            data[i+1] = g;
            data[i+2] = b;
            data[i+3] = 255;
        }

        ctx.putImageData(imgData, startX, startY);

        ctx.strokeStyle = "var(--neon-cyan)";
        ctx.lineWidth = 2;
        const laserX = startX + stepRatio * size;
        ctx.beginPath();
        ctx.moveTo(laserX, startY - 5);
        ctx.lineTo(laserX, startY + size + 5);
        ctx.stroke();

    } else if (activeLabId === 3) {
        // --- GYMNASIUM COMBAT GRID ---
        const size = 20;
        const cols = 5;
        const rows = 3;
        const startX = w/2 - (cols*size)/2;
        const startY = midY - (rows*size)/2;

        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.lineWidth = 1;
        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                ctx.strokeRect(startX + c*size, startY + r*size, size, size);
                if (c === 3 && r === 1) {
                    ctx.fillStyle = "rgba(255, 49, 49, 0.25)";
                    ctx.fillRect(startX + c*size + 1, startY + r*size + 1, size - 2, size - 2);
                }
                if (c === 4 && r === 2) {
                    ctx.fillStyle = "rgba(0, 240, 255, 0.15)";
                    ctx.fillRect(startX + c*size + 1, startY + r*size + 1, size - 2, size - 2);
                }
            }
        }

        const path = [
            {c: 0, r: 0}, {c: 1, r: 0}, {c: 2, r: 0}, {c: 2, r: 1}, {c: 2, r: 2}, {c: 3, r: 2}, {c: 4, r: 2}
        ];
        const idx = Math.floor(labAnimFrame / 20) % path.length;
        const cell = path[idx];

        ctx.fillStyle = "var(--neon-cyan)";
        ctx.beginPath();
        ctx.arc(startX + cell.c*size + size/2, startY + cell.r*size + size/2, 5, 0, Math.PI*2);
        ctx.fill();

    } else if (activeLabId === 4) {
        // --- SWARM PIPELINE ---
        const archX = w/2 - 60;
        const devX = w/2;
        const qaX = w/2 + 60;

        ctx.fillStyle = "rgba(255,255,255,0.03)";
        ctx.strokeStyle = "rgba(255,255,255,0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(archX, midY, 12, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.arc(devX, midY, 12, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.arc(qaX, midY, 12, 0, Math.PI*2); ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#fff"; ctx.font = "8px var(--font-cyber)";
        ctx.fillText("ARCH", archX - 11, midY + 22);
        ctx.fillText("DEV", devX - 8, midY + 22);
        ctx.fillText("QA", qaX - 6, midY + 22);

        ctx.beginPath(); ctx.moveTo(archX+12, midY); ctx.lineTo(devX-12, midY); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(devX+12, midY); ctx.lineTo(qaX-12, midY); ctx.stroke();

        const cycle = labAnimFrame % 100;
        if (cycle < 50) {
            const pct = cycle / 50;
            ctx.fillStyle = "var(--neon-cyan)";
            ctx.beginPath(); ctx.arc(archX + (devX - archX)*pct, midY, 3.5, 0, Math.PI*2); ctx.fill();
        } else {
            const pct = (cycle - 50) / 50;
            ctx.fillStyle = "var(--neon-gold)";
            ctx.beginPath(); ctx.arc(devX + (qaX - devX)*pct, midY, 3.5, 0, Math.PI*2); ctx.fill();
        }

    } else if (activeLabId === 5) {
        // --- EDGE COMPRESSION ---
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(w/2 - 80, midY - 8, 40, 16);
        ctx.strokeRect(w/2 + 40, midY - 4, 40, 8);

        ctx.fillStyle = "rgba(0, 240, 255, 0.1)";
        ctx.strokeStyle = "var(--neon-cyan)";
        ctx.beginPath(); ctx.rect(w/2 - 20, midY - 15, 40, 30); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.font = "7.5px var(--font-cyber)";
        ctx.fillText("GPTQ", w/2 - 12, midY + 3);

        const step = (labAnimFrame % 45) / 45;
        ctx.fillStyle = "var(--neon-gold)";
        ctx.font = "8px var(--font-mono)";
        ctx.fillText("FP16", w/2 - 75 + step*35, midY + 3);
        ctx.fillStyle = "var(--neon-cyan)";
        ctx.fillText("INT4", w/2 + 45 + step*28, midY + 3);
    }
}

// --- 15. AI DEVELOPER ROADMAP CONTROLLER ---
let activeRoadmapLevelId = 0;
let roadmapAnimRunning = true;
let roadmapAnimFrame = 0;

const roadmapLevels = [
    {
        id: 0,
        title: "LEVEL 0: Developer Foundation",
        desc: "Understand software environments, file structures, CPU/RAM/GPU pipelines, environment variables, command terminals, client-server web foundations, and basic developer tools (VS Code, Git).",
        syllabus: [
            "📂 Computer fundamentals: CPU/RAM/GPU processing paths, environment variables, OS structures.",
            "🐚 Command Line: Navigating folders, directory path scopes, executing python commands.",
            "🌐 Web foundation: HTTP handshakes, JSON payloads, client vs server communication.",
            "🛠️ Setup: Installing and using VS Code, Python environment, Terminal CLI, and GitHub."
        ],
        controls: [
            { id: "cpu-cores", label: "CPU Thread Allocation", min: 1, max: 16, step: 1, val: 4, unit: " cores" },
            { id: "ram-size", label: "RAM Buffer Size", min: 4, max: 64, step: 4, val: 16, unit: " GB" }
        ],
        runLog: (inputs) => {
            const cores = inputs["cpu-cores"];
            const ram = inputs["ram-size"];
            const speed = (cores * 1.6 + ram * 0.15).toFixed(1);
            return [
                "Initializing Dev environment variables...",
                "$ git init && mkdir aether_app && cd aether_app",
                `Repository initialized. System resources: ${cores} CPU threads, ${ram} GB RAM allocations.`,
                `$ python -m venv venv && pip install -r requirements.txt`,
                `[SUCCESS] Dev setup online. Workspace transfer rates: ${speed} GB/s. Milestone achieved!`
            ];
        }
    },
    {
        id: 1,
        title: "LEVEL 1: Master Python 🐍",
        desc: "Solve logic problems with Python programming. Master structures, lambda expressions, list comprehensions, exceptions, OOP frameworks, and virtualenv systems.",
        syllabus: [
            "🐍 Basics: variables, numbers, strings, conditionals (if/elif/else), loops (for/while), list/tuple/dict structures.",
            "🔧 Functions & Lambdas: parameters, scopes, return outputs, map, zip(), enumerate().",
            "🧩 Advanced: File/Exception handling, OOP classes, pip package installer, virtual environments.",
            "🚀 Challenges: Calculator, Expense tracker, Web scraper, Password generator."
        ],
        controls: [
            { id: "loops-count", label: "Iteration Loops Count", min: 100, max: 1000, step: 100, val: 500, unit: " loops" },
            { id: "compre-depth", label: "List Comprehension Nesting", min: 1, max: 3, step: 1, val: 1, unit: " levels" }
        ],
        runLog: (inputs) => {
            const loops = inputs["loops-count"];
            const depth = inputs["compre-depth"];
            const complexity = loops * depth;
            return [
                "Compiling Python Syntax trees...",
                "$ python interpreter.py --run loops_comp",
                `Executing list comprehension at nesting depth: ${depth}. Loop runs: ${loops}.`,
                `Calculating primes & dictionary zip filters...`,
                `[SUCCESS] Execution complete in ${complexity / 10}ms. OOP structures initialized successfully!`
            ];
        }
    },
    {
        id: 2,
        title: "LEVEL 2: Software Development",
        desc: "Build software surrounding AI models. Master Git branchings, PostgreSQL SQL relations, HTTP endpoints, status codes, and FastAPI backend servers.",
        syllabus: [
            "🌿 Git/GitHub: branch, merge, commit flows, pull requests, .gitignore, README assets.",
            "🗄️ SQL: relations, SELECT, JOIN queries, INSERT, primary/foreign key connections.",
            "⚡ APIs: HTTP statuses, GET/POST routing, JSON serialization, API auth keys.",
            " FastAPI: building async endpoints, serving JSON payloads, CORS integration."
        ],
        controls: [
            { id: "sql-joins", label: "SQL JOIN Operations", min: 1, max: 5, step: 1, val: 2, unit: " joins" },
            { id: "api-rate", label: "FastAPI Endpoint Traffic Limit", min: 100, max: 1000, step: 100, val: 500, unit: " req/s" }
        ],
        runLog: (inputs) => {
            const joins = inputs["sql-joins"];
            const rate = inputs["api-rate"];
            return [
                "Connecting to PostgreSQL database...",
                `$ SELECT * FROM users JOIN profiles ON users.id = profiles.user_id (${joins} joins)...`,
                `Found foreign key records. Output: 42 match rows.`,
                `FastAPI server listening at: http://localhost:8000/api/v1`,
                `[SUCCESS] Serving async GET request. Handled traffic load: ${rate} reqs/sec with 0% drops.`
            ];
        }
    },
    {
        id: 3,
        title: "LEVEL 3: Mathematics & Data",
        desc: "Master linear algebra vectors, statistics mean/variance, partial derivatives, and data visualization using NumPy, Pandas, and Matplotlib.",
        syllabus: [
            "📐 Math basics: matrix multiplication, dot product, dimensions, transpose transformations.",
            "📊 Statistics: mean, standard deviation, probability distributions, correlations.",
            "📈 Calculus: derivatives, gradients, partial derivatives, gradient descent algorithms.",
            "🐼 Data tools: Pandas DataFrames loading, cleaning, analyzing, Matplotlib charts plotting."
        ],
        controls: [
            { id: "matrix-dim", label: "Matrix Dimension size", min: 16, max: 256, step: 16, val: 64, unit: " x px" },
            { id: "grad-step", label: "Gradient Descent Step Size (Alpha)", min: 0.01, max: 0.50, step: 0.01, val: 0.10, unit: "" }
        ],
        runLog: (inputs) => {
            const size = inputs["matrix-dim"];
            const lr = inputs["grad-step"];
            const error = (0.5 / (lr * 10)).toFixed(4);
            return [
                "Loading NumPy Matrix arrays...",
                `Performing dot product on shape: (${size}, ${size}) x (${size}, ${size})...`,
                `Matrix product compiled. Computing partial derivatives dL/dW...`,
                `Gradient Descent step: W = W - ${lr} * dL. Cost error value: ${error}.`,
                `[SUCCESS] Cost minimum local reached. Insight graphs plotted successfully!`
            ];
        }
    },
    {
        id: 4,
        title: "LEVEL 4: Machine Learning 🤖",
        desc: "Train supervised and unsupervised models. Build price predictions, classification systems, decision trees, random forests, and clusters using scikit-learn.",
        syllabus: [
            "🛠️ ML Workflow: data collection, cleaning, feature engineering, train/test split.",
            "🤖 Supervised: Linear Regression, Logistic classification, Decision Trees, Random Forests, SVMs.",
            "🔬 Unsupervised: K-Means clustering, PCA dimensionality reductions.",
            "🎯 Concepts: overfitting, bias, variance, regularizations, cross-validations, scikit-learn."
        ],
        controls: [
            { id: "forest-trees", label: "Random Forest Estimators Count", min: 10, max: 200, step: 10, val: 100, unit: " trees" },
            { id: "test-ratio", label: "Dataset Train/Test Split Ratio", min: 0.10, max: 0.50, step: 0.05, val: 0.20, unit: "" }
        ],
        runLog: (inputs) => {
            const trees = inputs["forest-trees"];
            const ratio = inputs["test-ratio"];
            const acc = (88 + (trees * 0.05) - (ratio * 10)).toFixed(1);
            return [
                "Splitting dataset: train ratio = " + (1 - ratio).toFixed(2) + ", test ratio = " + ratio + "...",
                "Running feature engineering scaling on metrics...",
                `Fitting ${trees} Random Forest estimators...`,
                `Calculating validation confusion matrix...`,
                `[SUCCESS] Model training complete. Classifier validation accuracy: ${acc}%. Churn list compiled.`
            ];
        }
    },
    {
        id: 5,
        title: "LEVEL 5: Deep Learning 🧠",
        desc: "Build neural network systems, activation backpropagation, CNNs for computer vision, RNNs, and Transformer self-attentions using PyTorch.",
        syllabus: [
            "🧠 Neural nets: weights, biases, activations (ReLU/Sigmoid), forward/backpropagation, loss functions.",
            "👁️ Computer Vision: CNN layers, pooling kernels, object recognition, PyTorch models.",
            "🌀 Sequences: RNN networks, LSTM states, temporal predictions.",
            "⭐ Transformers: self-attention metrics, embeddings, positional encoding, encoder-decoder."
        ],
        controls: [
            { id: "neural-layers", label: "Hidden Neurons Layer Count", min: 1, max: 8, step: 1, val: 3, unit: " layers" },
            { id: "learn-rate", label: "Weight Learning Rate (Eta)", min: 0.001, max: 0.100, step: 0.005, val: 0.010, unit: "" }
        ],
        runLog: (inputs) => {
            const layers = inputs["neural-layers"];
            const lr = inputs["learn-rate"];
            const finalLoss = (0.24 / (layers * 1.5 + 1)).toFixed(4);
            return [
                "Initializing PyTorch tensor graph models...",
                `Constructing hidden network layers: ${layers} Linear configurations.`,
                "Epoch 1/50 -> Loss: 0.8421 | Forward pass success",
                "Epoch 50/50 -> Backpropagation updates completed. Loss value: " + finalLoss + ".",
                `[SUCCESS] Model convergence hit. PyTorch weights checkpoint saved. Vision pipeline ready.`
            ];
        }
    },
    {
        id: 6,
        title: "LEVEL 6: Generative AI 🚀",
        desc: "Master LLM fundamentals, tokens, context limits, role prompts, few-shot prompting, function tool callings, and custom Document RAG engines.",
        syllabus: [
            "🚀 Fundamentals: tokenizations, vector embeddings, context windows, temperature outputs.",
            "📝 Prompting: role prompts, few-shot prompts, chain-of-thought logics, schemas.",
            "📚 PDF RAG: document chunking, metadata filters, semantic search vector databases.",
            "🛠️ APIs: OpenAI/Anthropic APIs, structured outputs, JSON schema validation, evaluations."
        ],
        controls: [
            { id: "llm-temp", label: "LLM Generation Temperature", min: 0.0, max: 1.5, step: 0.1, val: 0.7, unit: "" },
            { id: "chunk-tokens", label: "Document Chunk size limit", min: 128, max: 1024, step: 128, val: 512, unit: " tokens" }
        ],
        runLog: (inputs) => {
            const temp = inputs["llm-temp"];
            const chunk = inputs["chunk-tokens"];
            const hallucination = (temp * 35).toFixed(0);
            return [
                "Splitting PDF document into text chunks: limit = " + chunk + " tokens...",
                "Running text-embedding-ada-002 model vectors creation...",
                "Indexing vector database index nodes...",
                `Invoking LLM completion API: temperature = ${temp}.`,
                `[SUCCESS] Document QA answer completed. Hallucination risk: ${hallucination}%. RAG context fed.`
            ];
        }
    },
    {
        id: 7,
        title: "LEVEL 7: AI Agents 🔥",
        desc: "Build JARVIS-style autonomous systems: tool-calling loops, multi-agent collaborations, memory, agent frameworks, research assistants, and job matched workflows.",
        syllabus: [
            "🔥 Tool Calling: LLM choosing search_web(), send_email(), read_calendar() loops.",
            "🧠 Agent design: loops, planning frameworks, system memory registers, guardrails.",
            "🤝 Swarms: multi-agent collaborative workflows, human-in-the-loop validation.",
            "🛠️ Projects: AI Research Agent (Topic -> search -> compare -> report), AI Job Assistant."
        ],
        controls: [
            { id: "agent-count", label: "Swarm Collaboration Nodes", min: 2, max: 6, step: 1, val: 3, unit: " agents" },
            { id: "agent-iter", label: "Max Agent Thinking Loops", min: 1, max: 10, step: 1, val: 5, unit: " runs" }
        ],
        runLog: (inputs) => {
            const count = inputs["agent-count"];
            const iter = inputs["agent-iter"];
            return [
                `Spawning Agent Crew: ${count} specialized nodes (Researcher, Coder, QA)...`,
                "Task 1: Querying web APIs regarding research topics...",
                "Task 2: Compiling report markdown assets...",
                `Thought Loop -> Iteration ${iter}/${iter}: Reviewing citation lists...`,
                `[SUCCESS] swarms workflow completed. Swarm threads resolved. Cite list saved. Jarvis assistance ready.`
            ];
        }
    },
    {
        id: 8,
        title: "LEVEL 8: Voice AI 🎙️",
        desc: "Integrate Speech-to-Text transcribers, real-time voice streaming pipelines, Text-to-Speech voices, WebRTC communication models, and custom conversational JARVIS voice assistants.",
        syllabus: [
            "🎙️ Speech to Text: Whisper transcribers, real-time streaming, latency reduction.",
            "🔊 Text to Speech: Voice cloning, emotional speech, TTS synthesis controllers.",
            "🛰️ Streams: WebRTC real-time connections, WebSockets audio packets streams.",
            "🤖 Voice Agents: Handling user interruptions, silence detectors, conversation loops."
        ],
        controls: [
            { id: "tts-speed", label: "Voice synthesis speed", min: 0.5, max: 2.0, step: 0.1, val: 1.0, unit: "x" },
            { id: "audio-latency", label: "WebRTC Audio Packet Buffer", min: 50, max: 400, step: 50, val: 150, unit: " ms" }
        ],
        runLog: (inputs) => {
            const speed = inputs["tts-speed"];
            const lat = inputs["audio-latency"];
            return [
                "Connecting WebSockets audio channels...",
                "User: 'Aethera, initialize Jarvis protocol...'",
                "Speech-to-Text: Whisper transcription completed in 90ms.",
                `synthesizing text response... Voice speed: ${speed}x.`,
                `[SUCCESS] Streaming WebRTC audio. Latency buffer: ${lat}ms. Voice assistants online.`
            ];
        }
    },
    {
        id: 9,
        title: "LEVEL 9: Production AI & MLOps",
        desc: "Deploy models as high-scale production systems. Master Linux nodes, FastAPI async channels, Docker containers, Cloud APIs (AWS/GCP), CI/CD pipelines, and MLOps metrics logging.",
        syllabus: [
            "⚡ Production API: FastAPI, asynchronous channels, WebSockets, background threads.",
            "🐳 Containers: Dockerfiles, image building, Docker Compose systems, pod scales.",
            "🚀 Deployments: Linux nodes, CI/CD integrations, cloud logging, Google Cloud/AWS.",
            "📈 MLOps: Experiment tracking, model registers, drift monitoring, eval pipelines."
        ],
        controls: [
            { id: "docker-replicas", label: "Container Docker Pod Replicas", min: 1, max: 10, step: 1, val: 3, unit: " pods" },
            { id: "traffic-load", label: "Simulated Endpoint Traffic Load", min: 1000, max: 20000, step: 1000, val: 5000, unit: " req/s" }
        ],
        runLog: (inputs) => {
            const pods = inputs["docker-replicas"];
            const load = inputs["traffic-load"];
            const podLoad = (load / pods).toFixed(0);
            return [
                "Building production Docker image...",
                `Spawning ${pods} Container Pods in Kubernetes cluster...`,
                `Starting Loadbalancer routing channels...`,
                `Simulating API traffic: ${load} reqs/sec. Load per pod: ${podLoad} reqs/sec.`,
                `[SUCCESS] CI/CD build successfully deployed. System status: 100% healthy. Logs monitored.`
            ];
        }
    }
];

function renderRoadmapLevelsList() {
    const list = document.getElementById("roadmap-levels-list");
    list.innerHTML = `<h4 style="font-family: var(--font-cyber); font-size: 10px; color: var(--neon-cyan); letter-spacing: 0.5px; margin-bottom: 8px;">ROADMAP LEVELS</h4>`;
    
    roadmapLevels.forEach(level => {
        const btn = document.createElement("button");
        btn.className = `lab-topic-btn ${level.id === activeRoadmapLevelId ? "active" : ""}`;
        btn.id = `roadmap-btn-${level.id}`;
        btn.innerHTML = `${level.id}. ${level.title.split(":")[1] || level.title}`;
        btn.addEventListener("click", () => loadRoadmapLevel(level.id));
        list.appendChild(btn);
    });
}

function loadRoadmapLevel(levelId) {
    synth.playClick();
    activeRoadmapLevelId = levelId;

    roadmapLevels.forEach(level => {
        const btn = document.getElementById(`roadmap-btn-${level.id}`);
        if (btn) {
            if (level.id === levelId) btn.classList.add("active");
            else btn.classList.remove("active");
        }
    });

    document.getElementById("roadmap-active-title").textContent = roadmapLevels[levelId].title.toUpperCase();
    document.getElementById("roadmap-explanation-text").textContent = roadmapLevels[levelId].desc;

    const syllabusBox = document.getElementById("roadmap-syllabus-container");
    syllabusBox.innerHTML = "";
    roadmapLevels[levelId].syllabus.forEach(item => {
        const div = document.createElement("div");
        div.style.borderBottom = "1px dashed rgba(255,255,255,0.03)";
        div.style.paddingBottom = "4px";
        div.textContent = item;
        syllabusBox.appendChild(div);
    });

    // Render steps grid link inside the roadmap tab
    const gridBox = document.getElementById("roadmap-steps-grid-box");
    if (gridBox && realms[levelId]) {
        gridBox.innerHTML = "";
        const stepsGrid = document.createElement("div");
        stepsGrid.className = "curriculum-steps-grid";
        const completed = gameState.completedSteps[levelId] || [];
        const totalSteps = Object.keys(realms[levelId].steps).length;
        
        for (let step = 1; step <= totalSteps; step++) {
            const isDone = completed.includes(step);
            const tile = document.createElement("div");
            tile.className = `curriculum-step-box ${isDone ? "completed" : ""}`;
            tile.textContent = step;
            tile.addEventListener("click", (e) => {
                e.stopPropagation();
                startWorkshopStep(levelId, step);
            });
            stepsGrid.appendChild(tile);
        }
        gridBox.appendChild(stepsGrid);
    }

    const controlsBox = document.getElementById("roadmap-controls-container");
    controlsBox.innerHTML = "";
    roadmapLevels[levelId].controls.forEach(ctrl => {
        const div = document.createElement("div");
        div.className = "lab-slider-group";
        div.innerHTML = `
            <label>${ctrl.label}: <span id="val-roadmap-${ctrl.id}">${ctrl.val}${ctrl.unit}</span></label>
            <input type="range" class="lab-slider" id="slider-roadmap-${ctrl.id}" min="${ctrl.min}" max="${ctrl.max}" step="${ctrl.step}" value="${ctrl.val}">
        `;
        controlsBox.appendChild(div);
        
        const slider = div.querySelector("input");
        slider.addEventListener("input", (e) => {
            document.getElementById(`val-roadmap-${ctrl.id}`).textContent = e.target.value + ctrl.unit;
        });
    });

    const consoleLogs = document.getElementById("roadmap-console-logs");
    consoleLogs.innerHTML = `<div class="lab-log-entry system">Loaded Roadmap Level ${levelId}. Sandbox compilation ready...</div>`;
}

function toggleRoadmapAnimation() {
    synth.playClick();
    roadmapAnimRunning = !roadmapAnimRunning;
    const icon = document.getElementById("play-roadmap-icon");
    const text = document.getElementById("play-roadmap-text");

    if (roadmapAnimRunning) {
        icon.className = "fa-solid fa-pause";
        text.textContent = "PAUSE";
        animateRoadmap();
    } else {
        icon.className = "fa-solid fa-play";
        text.textContent = "PLAY";
    }
}

function executeRoadmapExperiment() {
    synth.playClick();
    const consoleLogs = document.getElementById("roadmap-console-logs");
    consoleLogs.innerHTML = "";

    appendRoadmapLog("Compiling execution sandbox parameters...", "system");
    synth.playOsc(650, 0.08, "sine", 0.05);

    const level = roadmapLevels[activeRoadmapLevelId];
    const inputs = {};
    level.controls.forEach(ctrl => {
        const elem = document.getElementById(`slider-roadmap-${ctrl.id}`);
        inputs[ctrl.id] = elem ? parseFloat(elem.value) : ctrl.val;
    });

    const logs = level.runLog(inputs);
    
    logs.forEach((logText, idx) => {
        setTimeout(() => {
            let logType = "info";
            if (logText.startsWith("$")) logType = "system";
            else if (logText.startsWith("[SUCCESS]")) logType = "success";
            
            appendRoadmapLog(logText, logType);

            if (idx === logs.length - 1) {
                synth.playSuccess();
                gameState.xp += 10;
                appendTerminalLog(`Earned +10 XP for executing Level ${activeRoadmapLevelId} roadmap lab experiment!`, "success");
                updateStatsUI();
            } else {
                synth.playClick();
            }
        }, (idx + 1) * 800);
    });
}

function appendRoadmapLog(text, type) {
    const logs = document.getElementById("roadmap-console-logs");
    const entry = document.createElement("div");
    entry.className = `lab-log-entry ${type}`;
    entry.textContent = text;
    logs.appendChild(entry);
    logs.scrollTop = logs.scrollHeight;
}

function animateRoadmap() {
    if (!roadmapAnimRunning) return;
    requestAnimationFrame(animateRoadmap);

    const canvas = document.getElementById("roadmap-animation-canvas");
    if (!canvas || canvas.offsetParent === null) return;
    
    const ctx = canvas.getContext("2d");
    
    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    roadmapAnimFrame++;

    const w = canvas.width;
    const h = canvas.height;
    const midY = h / 2;

    if (activeRoadmapLevelId === 0) {
        // --- LEVEL 0: CPU/RAM/GPU PIPELINES ---
        ctx.fillStyle = "rgba(0, 240, 255, 0.1)";
        ctx.strokeStyle = "var(--neon-cyan)";
        ctx.lineWidth = 1.5;

        ctx.beginPath(); ctx.rect(40, midY - 20, 40, 40); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.font = "8px var(--font-cyber)"; ctx.fillText("CPU", 51, midY + 4);

        ctx.fillStyle = "rgba(255, 215, 0, 0.1)";
        ctx.strokeStyle = "var(--neon-gold)";
        ctx.beginPath(); ctx.rect(w/2 - 20, midY - 20, 40, 40); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.fillText("RAM", w/2 - 9, midY + 4);

        ctx.fillStyle = "rgba(189, 0, 255, 0.1)";
        ctx.strokeStyle = "var(--neon-purple)";
        ctx.beginPath(); ctx.rect(w - 80, midY - 20, 40, 40); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.fillText("GPU", w - 69, midY + 4);

        const cycle = roadmapAnimFrame % 90;
        const pct = (cycle % 45) / 45;
        ctx.fillStyle = "var(--neon-cyan)";
        if (cycle < 45) {
            ctx.beginPath(); ctx.arc(80 + (w/2 - 20 - 80)*pct, midY, 4, 0, Math.PI*2); ctx.fill();
        } else {
            ctx.beginPath(); ctx.arc((w/2 + 20) + (w - 80 - (w/2 + 20))*pct, midY, 4, 0, Math.PI*2); ctx.fill();
        }

    } else if (activeRoadmapLevelId === 1) {
        // --- LEVEL 1: PYTHON STACK ---
        ctx.fillStyle = "rgba(0, 240, 255, 0.08)";
        ctx.strokeStyle = "var(--neon-cyan)";
        ctx.strokeRect(w/2 - 60, midY - 30, 120, 60);

        ctx.fillStyle = "#fff"; ctx.font = "8.5px var(--font-mono)";
        const step = Math.floor(roadmapAnimFrame / 20) % 4;
        if (step >= 0) ctx.fillText(">>> x = 42", w/2 - 50, midY - 14);
        if (step >= 1) ctx.fillText(">>> name = 'Aether'", w/2 - 50, midY - 2);
        if (step >= 2) ctx.fillText(">>> print(x, name)", w/2 - 50, midY + 10);
        if (step >= 3) {
            ctx.fillStyle = "var(--neon-gold)";
            ctx.fillText("42 Aether", w/2 - 50, midY + 22);
        }

    } else if (activeRoadmapLevelId === 2) {
        // --- LEVEL 2: API SERVER ENDPOINTS ---
        ctx.fillStyle = "rgba(0, 240, 255, 0.1)";
        ctx.strokeStyle = "var(--neon-cyan)";
        ctx.lineWidth = 1.5;
        
        ctx.beginPath(); ctx.arc(45, midY, 15, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.font = "8px var(--font-cyber)"; ctx.fillText("CLIENT", 31, midY + 3);

        ctx.fillStyle = "rgba(189, 0, 255, 0.1)";
        ctx.strokeStyle = "var(--neon-purple)";
        ctx.beginPath(); ctx.rect(w/2 - 30, midY - 20, 60, 40); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.fillText("FASTAPI", w/2 - 18, midY + 3);

        ctx.fillStyle = "rgba(255, 215, 0, 0.1)";
        ctx.strokeStyle = "var(--neon-gold)";
        ctx.beginPath(); ctx.arc(w - 45, midY, 15, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.fillText("POSTGRES", w - 68, midY + 3);

        const cycle = roadmapAnimFrame % 100;
        const pct = (cycle % 50) / 50;
        ctx.fillStyle = "var(--neon-cyan)";
        if (cycle < 50) {
            ctx.beginPath(); ctx.arc(60 + (w/2 - 30 - 60)*pct, midY - 4, 3.5, 0, Math.PI*2); ctx.fill();
        } else {
            ctx.fillStyle = "var(--neon-gold)";
            ctx.beginPath(); ctx.arc((w/2 + 30) + (w - 60 - (w/2 + 30))*pct, midY + 4, 3.5, 0, Math.PI*2); ctx.fill();
        }

    } else if (activeRoadmapLevelId === 3) {
        // --- LEVEL 3: GRADIENT DESCENT CURVE ---
        ctx.strokeStyle = "rgba(255,255,255,0.2)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = w/2 - 80; x <= w/2 + 80; x++) {
            const rx = (x - w/2) / 40;
            const ry = rx * rx;
            const y = midY + 25 - ry * 25;
            if (x === w/2 - 80) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.fillStyle = "var(--neon-green)";
        ctx.beginPath(); ctx.arc(w/2, midY + 25, 4, 0, Math.PI*2); ctx.fill();

        const cycle = (roadmapAnimFrame % 90) / 90;
        const startX = w/2 - 70;
        const endX = w/2;
        const curX = startX + (endX - startX)*cycle;
        const rx = (curX - w/2) / 40;
        const curY = midY + 25 - (rx * rx) * 25;

        ctx.fillStyle = "var(--neon-gold)";
        ctx.beginPath(); ctx.arc(curX, curY - 5, 5, 0, Math.PI*2); ctx.fill();

    } else if (activeRoadmapLevelId === 4) {
        // --- LEVEL 4: SCATTERED DATA CLUSTERING ---
        ctx.fillStyle = "var(--neon-cyan)";
        const points = [
            {x: -40, y: -20}, {x: -30, y: -10}, {x: -25, y: -25},
            {x: 30, y: 15}, {x: 40, y: 25}, {x: 25, y: 30}
        ];
        points.forEach(pt => {
            ctx.beginPath(); ctx.arc(w/2 + pt.x, midY + pt.y, 3.5, 0, Math.PI*2); ctx.fill();
        });

        ctx.strokeStyle = "var(--neon-gold)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(w/2 - 60, midY - 30);
        ctx.lineTo(w/2 + 60, midY + 30);
        ctx.stroke();

    } else if (activeRoadmapLevelId === 5) {
        // --- LEVEL 5: NEURAL NETWORK ACTIVATIONS ---
        const inputs = [midY - 24, midY, midY + 24];
        const hiddens = [midY - 30, midY - 10, midY + 10, midY + 30];
        const outputs = [midY];

        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        inputs.forEach(iy => {
            hiddens.forEach(hy => {
                ctx.beginPath(); ctx.moveTo(w/2 - 60, iy); ctx.lineTo(w/2, hy); ctx.stroke();
            });
        });
        hiddens.forEach(hy => {
            outputs.forEach(oy => {
                ctx.beginPath(); ctx.moveTo(w/2, hy); ctx.lineTo(w/2 + 60, oy); ctx.stroke();
            });
        });

        ctx.fillStyle = "rgba(0, 240, 255, 0.15)";
        ctx.strokeStyle = "var(--neon-cyan)";
        inputs.forEach(iy => {
            ctx.beginPath(); ctx.arc(w/2 - 60, iy, 7, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        });
        ctx.fillStyle = "rgba(189, 0, 255, 0.15)";
        ctx.strokeStyle = "var(--neon-purple)";
        hiddens.forEach(hy => {
            ctx.beginPath(); ctx.arc(w/2, hy, 7, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        });
        ctx.fillStyle = "rgba(255, 215, 0, 0.15)";
        ctx.strokeStyle = "var(--neon-gold)";
        outputs.forEach(oy => {
            ctx.beginPath(); ctx.arc(w/2 + 60, oy, 7, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        });

    } else if (activeRoadmapLevelId === 6) {
        // --- LEVEL 6: RAG CHUNKS PIPELINE ---
        ctx.strokeStyle = "var(--border-color)";
        ctx.lineWidth = 1;
        ctx.strokeRect(40, midY - 24, 30, 48);
        ctx.fillStyle = "#fff"; ctx.font = "7.5px var(--font-cyber)"; ctx.fillText("PDF", 49, midY + 3);

        ctx.strokeRect(w/2 - 20, midY - 12, 40, 24);
        ctx.fillStyle = "var(--neon-cyan)"; ctx.fillText("CHUNKS", w/2 - 17, midY + 3);

        ctx.strokeRect(w - 75, midY - 24, 35, 48);
        ctx.fillStyle = "var(--neon-gold)"; ctx.fillText("VDB", w - 66, midY + 3);

        const cycle = roadmapAnimFrame % 90;
        const pct = (cycle % 45) / 45;
        if (cycle < 45) {
            ctx.fillStyle = "var(--neon-cyan)";
            ctx.beginPath(); ctx.arc(70 + (w/2 - 20 - 70)*pct, midY, 4, 0, Math.PI*2); ctx.fill();
        } else {
            ctx.fillStyle = "var(--neon-gold)";
            ctx.beginPath(); ctx.arc((w/2 + 20) + (w - 75 - (w/2 + 20))*pct, midY, 4, 0, Math.PI*2); ctx.fill();
        }

    } else if (activeRoadmapLevelId === 7) {
        // --- LEVEL 7: AGENT TOOLS LOOP ---
        ctx.fillStyle = "rgba(0, 240, 255, 0.15)";
        ctx.strokeStyle = "var(--neon-cyan)";
        ctx.beginPath(); ctx.arc(w/2, midY, 20, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.font = "8px var(--font-cyber)"; ctx.fillText("AGENT", w/2 - 13, midY + 3);

        const tools = [
            {name: "search_web", x: w/2 - 80, y: midY - 25},
            {name: "read_db", x: w/2 - 80, y: midY + 15},
            {name: "run_code", x: w/2 + 50, y: midY - 5}
        ];
        tools.forEach(tool => {
            ctx.fillStyle = "rgba(255, 215, 0, 0.08)";
            ctx.strokeStyle = "rgba(255, 215, 0, 0.25)";
            ctx.strokeRect(tool.x, tool.y, 45, 16);
            ctx.fillStyle = "#fff"; ctx.font = "7.5px var(--font-mono)";
            ctx.fillText(tool.name, tool.x + 3, tool.y + 11);
        });

        const activeIdx = Math.floor(roadmapAnimFrame / 30) % tools.length;
        const tool = tools[activeIdx];
        ctx.strokeStyle = "var(--neon-gold)";
        ctx.beginPath(); ctx.moveTo(w/2, midY); ctx.lineTo(tool.x + 22, tool.y + 8); ctx.stroke();

    } else if (activeRoadmapLevelId === 8) {
        // --- LEVEL 8: AUDIO SINE WAVE STREAM ---
        ctx.strokeStyle = "var(--neon-cyan)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 20; x < w - 20; x++) {
            const angle = (x / 18) + (roadmapAnimFrame * 0.15);
            const y = midY + Math.sin(angle) * 20;
            if (x === 20) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.fillStyle = "#fff"; ctx.font = "8px var(--font-cyber)";
        ctx.fillText("VOICE STREAM IN / OUT", w/2 - 45, midY - 26);

    } else if (activeRoadmapLevelId === 9) {
        // --- LEVEL 9: DOCKER CONTAINER SCALING ---
        const containerWidth = 40;
        const containerHeight = 24;
        const count = 3;
        const startX = w/2 - (count*50)/2 + 5;

        for (let i = 0; i < count; i++) {
            const curX = startX + i*50;
            ctx.fillStyle = "rgba(0, 240, 255, 0.1)";
            ctx.strokeStyle = "var(--neon-cyan)";
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.rect(curX, midY - 12, containerWidth, containerHeight); ctx.fill(); ctx.stroke();
            
            ctx.fillStyle = "#fff"; ctx.font = "7px var(--font-mono)";
            ctx.fillText("POD_" + i, curX + 6, midY + 4);
        }

        ctx.fillStyle = "var(--neon-gold)"; ctx.font = "8.5px var(--font-cyber)";
        ctx.fillText("MLOPS DEPLOYED", w/2 - 34, midY - 22);
    }
}

// --- 12. INITIALIZATION ON PAGE LOAD ---
window.addEventListener("DOMContentLoaded", () => {
    // Compile steps database dynamically
    compileRealmsSteps();
    
    updateStatsUI();
    updateAchievementsUI();
    updateLeaderboardUI();
    renderCurriculumList();
    renderRoadmapLevelsList();
    loadRoadmapLevel(0);

    // Bind login form elements listeners
    document.getElementById("auth-toggle-link").addEventListener("click", toggleAuthMode);
    document.getElementById("login-form").addEventListener("submit", handleAuthSubmit);

    // Bind Visual Lab tabs and buttons
    document.getElementById("tab-curriculum").addEventListener("click", () => switchHomeTab("curriculum"));
    document.getElementById("tab-roadmap").addEventListener("click", () => switchHomeTab("roadmap"));
    document.getElementById("tab-visual-labs").addEventListener("click", () => switchHomeTab("labs"));

    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById(`lab-btn-${i}`);
        if (btn) {
            btn.addEventListener("click", () => loadVisualLab(i));
        }
    }

    document.getElementById("play-lab-anim-btn").addEventListener("click", toggleLabAnimation);
    document.getElementById("run-lab-btn").addEventListener("click", executeLabExperiment);

    document.getElementById("play-roadmap-anim-btn").addEventListener("click", toggleRoadmapAnimation);
    document.getElementById("run-roadmap-btn").addEventListener("click", executeRoadmapExperiment);

    // Initial silent visual state greeting
    document.getElementById("oracle-state-indicator").textContent = "SYSTEM: READY";

    // Run animation frames
    animateLab();
    animateRoadmap();
});
