/* ==========================================================================
   AETHER_AI ACADEMY CORE APP LOGIC
   Features: Detailed FreeCodeCamp Course Tree (30 Steps per Realm),
             Dynamic Step Compiler, 10-Column Workshop Grids,
             Sound Synth, AI Oracle Speech, and MLOps Terminal.
   ========================================================================== */

// --- 1. DYNAMIC STEP BUILDER SOURCE LINES ---
const level1Lines = [
    { code: "import os", desc: "Import the OS operating system module.", err: "Import os is missing." },
    { code: "from langchain_openai import ChatOpenAI", desc: "Import the ChatOpenAI causal engine.", err: "ChatOpenAI import is missing." },
    { code: "from langchain_openai import OpenAIEmbeddings", desc: "Import the OpenAIEmbeddings model.", err: "OpenAIEmbeddings import is missing." },
    { code: "from langchain_community.vectorstores import Chroma", desc: "Import the Chroma vector store client.", err: "Chroma import is missing." },
    { code: "class AutonomousRAGAgent:", desc: "Declare the main AutonomousRAGAgent class.", err: "Class header is missing." },
    { code: "    def __init__(self, db_path):", desc: "Define the class constructor, receiving the database folder path.", err: "Constructor definition is missing." },
    { code: "        self.db_path = db_path", desc: "Save the database path to class parameters.", err: "self.db_path reference is missing." },
    { code: "        self.embeddings = OpenAIEmbeddings()", desc: "Initialize the OpenAIEmbeddings encoder.", err: "self.embeddings initializer is missing." },
    { code: "        self.db = Chroma(persist_directory=db_path, embedding_function=self.embeddings)", desc: "Establish Chroma DB connection with embedding models.", err: "self.db Chroma client is missing." },
    { code: "        self.llm = ChatOpenAI(model=\"gpt-4o-mini\", temperature=0)", desc: "Initialize the ChatOpenAI language model in greedy decoding mode.", err: "self.llm ChatOpenAI client is missing." },
    { code: "    def retrieve_context(self, query):", desc: "Declare the context retriever method.", err: "retrieve_context header is missing." },
    { code: "        docs = self.db.similarity_search(query, k=3)", desc: "Query Chroma DB for the top 3 relevant documents matching query.", err: "similarity_search query is missing or k is not 3." },
    { code: "        texts = [d.page_content for d in docs]", desc: "Loop through retrieved documents and extract page text content.", err: "Page text extraction list comprehension is missing." },
    { code: "        return \"\\n\".join(texts)", desc: "Return the texts joined by newline characters.", err: "return statement is missing or not joining by newline." },
    { code: "    def query_oracle(self, prompt):", desc: "Declare the main question answering query_oracle method.", err: "query_oracle header is missing." },
    { code: "        context = self.retrieve_context(prompt)", desc: "Retrieve database context matching the user's prompt.", err: "retrieve_context call is missing." },
    { code: "        system_prompt = f\"Use context: \\n{context}\"", desc: "Formulate system instructions containing retrieved facts.", err: "system_prompt formatting is missing." },
    { code: "        messages = [{\"role\": \"system\", \"content\": system_prompt}]", desc: "Create a chat messages list containing the system instructions.", err: "system message dictionary is missing." },
    { code: "        messages.append({\"role\": \"user\", \"content\": prompt})", desc: "Append user question to the messages list.", err: "user message append is missing." },
    { code: "        response = self.llm.invoke(messages)", desc: "Invoke the language model with the conversation messages.", err: "self.llm.invoke call is missing." },
    { code: "        return response.content", desc: "Extract and return the text content from response.", err: "response.content return is missing." },
    { code: "    def add_document(self, content):", desc: "Create a helper method to ingest new documents.", err: "add_document header is missing." },
    { code: "        from langchain_core.documents import Document", desc: "Import the Document models wrapper from LangChain core.", err: "Document import is missing." },
    { code: "        doc = Document(page_content=content)", desc: "Instantiate a Document object wrapping the content string.", err: "Document instantiation is missing." },
    { code: "        self.db.add_documents([doc])", desc: "Ingest the Document list into the Chroma database.", err: "self.db.add_documents call is missing." },
    { code: "if __name__ == \"__main__\":", desc: "Create local validation entrypoint block.", err: "__main__ block is missing." },
    { code: "    agent = AutonomousRAGAgent(\"./db\")", desc: "Instantiate local pipeline agent pointing to a db folder.", err: "AutonomousRAGAgent instantiation is missing." },
    { code: "    agent.add_document(\"Chroma Gate code is: 7480\")", desc: "Ingest target secret code into vector store.", err: "add_document call is missing." },
    { code: "    ans = agent.query_oracle(\"What is the code?\")", desc: "Run query search against oracle.", err: "query_oracle test call is missing." },
    { code: "    print(ans)", desc: "Print the final oracle answers logs.", err: "print(ans) statement is missing." }
];

const level2Lines = [
    { code: "import cv2", desc: "Import the OpenCV computer vision framework.", err: "Import cv2 is missing." },
    { code: "import torch", desc: "Import the PyTorch deep learning framework.", err: "Import torch is missing." },
    { code: "from ultralytics import YOLO", desc: "Import the YOLOv8 object segmentation model class.", err: "YOLO import is missing." },
    { code: "from diffusers import StableDiffusionImg2ImgPipeline", desc: "Import the Stable Diffusion image-to-image pipeline class.", err: "StableDiffusionImg2ImgPipeline import is missing." },
    { code: "class AegisGuardCV:", desc: "Declare the main AegisGuardCV processing class.", err: "Class header is missing." },
    { code: "    def __init__(self):", desc: "Define the class constructor initializer.", err: "Constructor definition is missing." },
    { code: "        self.yolo = YOLO(\"yolov8n.pt\")", desc: "Load the YOLOv8 nano network weights.", err: "self.yolo instantiation is missing." },
    { code: "        self.sd_pipe = StableDiffusionImg2ImgPipeline.from_pretrained(\"runwayml/stable-diffusion-v1-5\", torch_dtype=torch.float16)", desc: "Load the pre-trained Stable Diffusion v1.5 weights in FP16 precision.", err: "self.sd_pipe loader is missing or not in FP16." },
    { code: "        self.sd_pipe = self.sd_pipe.to(\"cuda\")", desc: "Push the Stable Diffusion pipeline to the GPU CUDA context.", err: "self.sd_pipe.to('cuda') is missing." },
    { code: "    def process_frame(self, frame):", desc: "Declare the frame processor method.", err: "process_frame header is missing." },
    { code: "        results = self.yolo(frame)", desc: "Run the YOLO detector on the incoming image frame.", err: "self.yolo detection call is missing." },
    { code: "        detected_objects = []", desc: "Initialize an empty list to collect object labels.", err: "detected_objects list is missing." },
    { code: "        for box in results[0].boxes:", desc: "Loop through detected bounding boxes.", err: "box results loop is missing." },
    { code: "            label = results[0].names[int(box.cls[0])]", desc: "Lookup the class name label from YOLO classifications list.", err: "Class name lookup is missing." },
    { code: "            detected_objects.append(label)", desc: "Append the detected label name to the tracker array.", err: "append call is missing." },
    { code: "        return detected_objects", desc: "Return the list of detected object labels.", err: "detected_objects return is missing." },
    { code: "    def stylize_scene(self, init_image, prompt):", desc: "Declare the scene stylizer method.", err: "stylize_scene header is missing." },
    { code: "        img = cv2.resize(init_image, (512, 512))", desc: "Resize the initial image to 512x512 to match diffusion requirements.", err: "cv2.resize is missing." },
    { code: "        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)", desc: "Convert OpenCV's default BGR image to RGB format.", err: "cv2.cvtColor is missing." },
    { code: "        outputs = self.sd_pipe(prompt=prompt, image=img_rgb, strength=0.75)", desc: "Run Stable Diffusion image-to-image style transfer with 0.75 noise strength.", err: "self.sd_pipe execution is missing or strength is not 0.75." },
    { code: "        return outputs.images[0]", desc: "Return the first generated artwork image.", err: "outputs return is missing." },
    { code: "if __name__ == \"__main__\":", desc: "Create local validation entrypoint block.", err: "__main__ block is missing." },
    { code: "    guard = AegisGuardCV()", desc: "Instantiate the AegisGuardCV processing client.", err: "AegisGuardCV instantiation is missing." },
    { code: "    img = cv2.imread(\"assets/nlp_realm.jpg\")", desc: "Load a sample image from the assets folder.", err: "cv2.imread call is missing." },
    { code: "    if img is not None:", desc: "Verify the image loaded successfully from disk.", err: "None verification is missing." },
    { code: "        objects = guard.process_frame(img)", desc: "Detect objects inside the loaded image.", err: "process_frame test call is missing." },
    { code: "        print(f\"Detected: {objects}\")", desc: "Print the list of detected targets.", err: "print detected objects is missing." },
    { code: "        artwork = guard.stylize_scene(img, \"cyberpunk style\")", desc: "Redraw the image into a cyberpunk art style.", err: "stylize_scene test call is missing." },
    { code: "        cv2.imwrite(\"artwork.jpg\", artwork)", desc: "Save the generated stylized artwork image back to disk.", err: "cv2.imwrite call is missing." },
    { code: "        print(\"Artwork saved.\")", desc: "Print the final confirmation status logs.", err: "confirmation print is missing." }
];

const level3Lines = [
    { code: "import gymnasium as gym", desc: "Import the Gymnasium environment building library.", err: "Import gymnasium is missing." },
    { code: "import numpy as np", desc: "Import the NumPy numerical matrices package.", err: "Import numpy is missing." },
    { code: "from stable_baselines3 import PPO", desc: "Import the Proximal Policy Optimization reinforcement algorithm class.", err: "PPO import is missing." },
    { code: "class GolemCombatEnv(gym.Env):", desc: "Declare custom GolemCombatEnv class inheriting from gym.Env.", err: "Class header inheriting from gym.Env is missing." },
    { code: "    def __init__(self):", desc: "Define the Gymnasium constructor method.", err: "Constructor definition is missing." },
    { code: "        super(GolemCombatEnv, self).__init__()", desc: "Trigger parent Gymnasium environment constructor settings.", err: "super constructor call is missing." },
    { code: "        self.action_space = gym.spaces.Discrete(4)", desc: "Define a discrete action space accommodating 4 Golem maneuvers.", err: "self.action_space Discrete space is missing." },
    { code: "        self.observation_space = gym.spaces.Box(low=0, high=1, shape=(8,), dtype=np.float32)", desc: "Define observation Box spaces mapping 8 floating-point variables.", err: "self.observation_space Box space mapping 8 values is missing." },
    { code: "        self.state = np.random.rand(8)", desc: "Initialize Golem state variables with random floats.", err: "self.state initialization is missing." },
    { code: "    def reset(self, seed=None):", desc: "Declare environment reset method.", err: "reset header is missing." },
    { code: "        super().reset(seed=seed)", desc: "Trigger base class Gymnasium seed parameters resets.", err: "super().reset call is missing." },
    { code: "        self.state = np.random.rand(8)", desc: "Reset observation state values to new random values.", err: "state reset assignment is missing." },
    { code: "        return self.state, {}", desc: "Return the state values and an empty metadata info dictionary.", err: "return state tuple is missing." },
    { code: "    def step(self, action):", desc: "Declare step simulator actions execution method.", err: "step header is missing." },
    { code: "        self.state = np.random.rand(8)", desc: "Update internal environment state coordinates.", err: "state updates are missing." },
    { code: "        reward = 1.0 if action == 1 else -1.0", desc: "Calculate action step reward: 1.0 for action 1, else -1.0.", err: "reward calculations are missing." },
    { code: "        terminated = False", desc: "Set terminated state variable to False.", err: "terminated flag is missing." },
    { code: "        truncated = False", desc: "Set truncated state variable to False.", err: "truncated flag is missing." },
    { code: "        return self.state, reward, terminated, truncated, {}", desc: "Return state observation, reward, flags, and info dictionary.", err: "step return tuple is missing." },
    { code: "if __name__ == \"__main__\":", desc: "Create local validation entrypoint block.", err: "__main__ block is missing." },
    { code: "    env = GolemCombatEnv()", desc: "Instantiate the GolemCombatEnv simulation board.", err: "GolemCombatEnv instantiation is missing." },
    { code: "    obs, info = env.reset()", desc: "Reset the environment parameters to baseline state.", err: "env.reset call is missing." },
    { code: "    action = env.action_space.sample()", desc: "Extract a random action sample from discrete action space.", err: "action sampling call is missing." },
    { code: "    obs, reward, term, trunc, info = env.step(action)", desc: "Execute a step in the simulation using the sampled action.", err: "env.step call is missing." },
    { code: "    print(f\"Obs: {obs}, Reward: {reward}\")", desc: "Print current environment observation metrics.", err: "status print is missing." },
    { code: "    model = PPO(\"MlpPolicy\", env, verbose=1)", desc: "Initialize the PPO agent model on GolemEnv using Multi-Layer Perceptron policy.", err: "PPO model initialization is missing." },
    { code: "    print(\"Training Golem PPO...\")", desc: "Print training startup message.", err: "training logs print is missing." },
    { code: "    model.learn(total_timesteps=50000)", desc: "Train policy network parameters for exactly 50,000 steps.", err: "model.learn call is missing or timesteps is not 50000." },
    { code: "    model.save(\"golem_policy\")", desc: "Save the optimized policy model weights back to disk.", err: "model.save call is missing." },
    { code: "    print(\"Model saved.\")", desc: "Print final confirmation logs.", err: "confirmation print is missing." }
];

const level4Lines = [
    { code: "import os", desc: "Import the OS operating system module.", err: "Import os is missing." },
    { code: "from crewai import Agent, Task, Crew, Process", desc: "Import the CrewAI Agent, Task, Crew, and Process modules.", err: "CrewAI imports are missing." },
    { code: "from langchain_openai import ChatOpenAI", desc: "Import ChatOpenAI language model wrapper class.", err: "ChatOpenAI import is missing." },
    { code: "llm = ChatOpenAI(model=\"gpt-4o-mini\", temperature=0.2)", desc: "Initialize language model in temperature 0.2 format.", err: "llm instantiation is missing or not gpt-4o-mini." },
    { code: "arch_role = \"Systems Architect\"", desc: "Set the Systems Architect role string variable.", err: "arch_role is missing." },
    { code: "arch_goal = \"Design secure microservices blueprints\"", desc: "Set Systems Architect goal string variable.", err: "arch_goal is missing." },
    { code: "arch_backstory = \"Expert cloud systems architect.\"", desc: "Set Systems Architect backstory string variable.", err: "arch_backstory is missing." },
    { code: "architect = Agent(role=arch_role, goal=arch_goal, backstory=arch_backstory, llm=llm)", desc: "Instantiate Systems Architect agent object.", err: "architect agent is missing." },
    { code: "coder_role = \"Senior Constructor\"", desc: "Set the Developer role string variable.", err: "coder_role is missing." },
    { code: "coder_goal = \"Implement clean modular Python code\"", desc: "Set Developer goal string variable.", err: "coder_goal is missing." },
    { code: "coder_backstory = \"Full stack Python coding wizard.\"", desc: "Set Developer backstory string variable.", err: "coder_backstory is missing." },
    { code: "coder = Agent(role=coder_role, goal=coder_goal, backstory=coder_backstory, llm=llm)", desc: "Instantiate Code Constructor developer agent.", err: "coder agent is missing." },
    { code: "qa_role = \"Quality Assurance Validator\"", desc: "Set the QA validator role string variable.", err: "qa_role is missing." },
    { code: "qa_goal = \"Identify logic vulnerabilities and write tests\"", desc: "Set QA validator goal string variable.", err: "qa_goal is missing." },
    { code: "qa_backstory = \"Ruthless automated software tester.\"", desc: "Set QA validator backstory string variable.", err: "qa_backstory is missing." },
    { code: "qa = Agent(role=qa_role, goal=qa_goal, backstory=qa_backstory, llm=llm)", desc: "Instantiate QA validator agent.", err: "qa agent is missing." },
    { code: "t1_desc = \"Design database schemas\"", desc: "Set database blueprint task description.", err: "t1_desc is missing." },
    { code: "task1 = Task(description=t1_desc, agent=architect)", desc: "Create database schema design task bound to architect agent.", err: "task1 object is missing." },
    { code: "t2_desc = \"Write SQLite wrapper classes\"", desc: "Set database coding implementation task description.", err: "t2_desc is missing." },
    { code: "task2 = Task(description=t2_desc, agent=coder)", desc: "Create database connection coding task bound to developer agent.", err: "task2 object is missing." },
    { code: "t3_desc = \"Write unit assertions\"", desc: "Set test cases verification task description.", err: "t3_desc is missing." },
    { code: "task3 = Task(description=t3_desc, agent=qa)", desc: "Create QA validation task bound to QA agent.", err: "task3 object is missing." },
    { code: "agents_list = [architect, coder, qa]", desc: "Create an agents list array.", err: "agents_list is missing." },
    { code: "tasks_list = [task1, task2, task3]", desc: "Create a tasks list array.", err: "tasks_list is missing." },
    { code: "crew_process = Process.sequential", desc: "Select sequential Process modes variables.", err: "crew_process is missing." },
    { code: "crew = Crew(agents=agents_list, tasks=tasks_list, process=crew_process)", desc: "Instantiate Crew controller containing agents and tasks.", err: "crew instantiation is missing." },
    { code: "result = crew.kickoff()", desc: "Kickoff the Crew collaborative swarms processes.", err: "crew.kickoff call is missing." },
    { code: "print(result)", desc: "Print the final collaborative logs output.", err: "result print is missing." },
    { code: "print(\"Agent swarm software construction cycle complete.\")", desc: "Print execution success status.", err: "success print is missing." },
    { code: "print(\"System ready for autonomous tasks processing.\")", desc: "Print system status transmission logs.", err: "system ready print is missing." }
];

const level5Lines = [
    { code: "import torch", desc: "Import the PyTorch framework.", err: "Import torch is missing." },
    { code: "from transformers import AutoModelForCausalLM, AutoTokenizer", desc: "Import Auto Causal LM and Tokenizers from Hugging Face.", err: "Auto causal classes imports are missing." },
    { code: "from optimum.gptq import GPTQQuantizer", desc: "Import the GPTQ post training quantization manager.", err: "GPTQQuantizer import is missing." },
    { code: "model_id = \"facebook/opt-125m\"", desc: "Define the model ID string variable.", err: "model_id is missing." },
    { code: "print(f\"Loading tokenizer for: {model_id}\")", desc: "Print tokenizer loading details.", err: "tokenizer print is missing." },
    { code: "tokenizer = AutoTokenizer.from_pretrained(model_id)", desc: "Load the pre-trained model tokenizer configurations.", err: "tokenizer loader is missing." },
    { code: "print(\"Loading FP16 model weights parameters...\")", desc: "Print FP16 weights loading logs.", err: "weights log print is missing." },
    { code: "model = AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.float16, device_map=\"auto\")", desc: "Load model causal weights in FP16 precision.", err: "AutoModelForCausalLM is missing or not in FP16." },
    { code: "print(\"Initializing GPTQ compression engine...\")", desc: "Print quantization setup startup logs.", err: "quantization setup print is missing." },
    { code: "quant_bits = 4", desc: "Set target quantization bits depth to 4.", err: "quant_bits is missing or not 4." },
    { code: "quant_dataset = \"c4\"", desc: "Set target calibration dataset to 'c4'.", err: "quant_dataset is missing." },
    { code: "quantizer = GPTQQuantizer(bits=quant_bits, dataset=quant_dataset, model_seqlen=2048)", desc: "Initialize GPTQQuantizer with bits, dataset, and sequence length.", err: "quantizer instantiation is missing." },
    { code: "print(\"Starting quantization calibration...\")", desc: "Print quantization calibration start logs.", err: "calibration log print is missing." },
    { code: "quantized_model = quantizer.quantize_model(model, tokenizer)", desc: "Execute quantization optimizer calibration.", err: "quantize_model call is missing." },
    { code: "print(\"Quantization complete. Saving outputs...\")", desc: "Print quantization finish status logs.", err: "quantization save log print is missing." },
    { code: "output_dir = \"./quantized_model\"", desc: "Define the export directory path string variable.", err: "output_dir is missing." },
    { code: "quantized_model.save_pretrained(output_dir)", desc: "Save the optimized causal quantized weights.", err: "save_pretrained is missing." },
    { code: "tokenizer.save_pretrained(output_dir)", desc: "Save the tokenizer configurations into the output folder.", err: "tokenizer.save_pretrained call is missing." },
    { code: "print(\"MLOps model compression validation complete.\")", desc: "Print validation completed logs.", err: "compression validation print is missing." },
    { code: "print(\"System ready for edge Triton deployment.\")", desc: "Print the final Triton deployment readiness status logs.", err: "Triton ready print is missing." }
];

// Helper to escape HTML tags in strings
function escapeHTML(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// --- Base Metadata for all 5 Certification Realms ---
const realms = {
    1: {
        id: 1,
        name: "Valley of Whispers",
        topic: "NLP & LLMs",
        certTitle: "NLP & LLM Agentic Architect Certification",
        image: "assets/nlp_realm.jpg",
        xpReward: 100,
        salaryReward: 130000,
        rankTitle: "Large Language Knight",
        techStack: ["Python", "LangChain", "ChromaDB", "OpenAI API", "Hugging Face"],
        lore: "The ancient text whispers in the Valley have corrupted, leaking static. Decipher the fragments, configure a Vector Database, and forge an Autonomous RAG Agent capable of calling local weapons tools and remembering past chats to restore order.",
        glossary: [
            { term: "RAG", def: "Retrieval-Augmented Generation. A pattern that queries a vector database for relevant facts matching a user's prompt, appending those facts into the LLM context so it generates highly accurate responses." },
            { term: "Vector Database (Chroma)", def: "A specialized index engine that saves numerical vector arrays (embeddings) representing sentence meanings, allowing high-speed cosine distance similarity lookups." },
            { term: "Embedding Model", def: "A deep learning neural transformer that translates text strings into dense floating-point arrays containing high-dimensional semantic definitions." }
        ]
    },
    2: {
        id: 2,
        name: "Mirage Canyon",
        topic: "Computer Vision",
        certTitle: "Computer Vision & Diffusion Shaman Certification",
        image: "assets/cv_realm.jpg",
        xpReward: 150,
        salaryReward: 170000,
        rankTitle: "Computer Vision Shaman",
        techStack: ["OpenCV", "YOLOv8", "PyTorch", "Stable Diffusion", "Diffusers"],
        lore: "Mirages in the Canyon are blinding travelers with illusory projections. Build a real-time YOLOv8 object detection pipeline that identifies target objects on a live feed, and feeds crop-coordinates into a Stable Diffusion image-to-image loop to generate stylised, crystal-clear path illustrations.",
        glossary: [
            { term: "YOLOv8", def: "You Only Look Once (v8). A state-of-the-art real-time convolutional neural network that detects bounding boxes and object segmentations in visual frames in milliseconds." },
            { term: "Stable Diffusion", def: "A latent diffusion generative AI model that produces highly realistic or artistic images from text prompts or base image outlines." },
            { term: "Image-to-Image (Img2Img)", def: "A SD pipeline variant that intakes a starting photo, introduces controllable noise, and repaints it according to a text guide." }
        ]
    },
    3: {
        id: 3,
        name: "Forge of Destiny",
        topic: "Reinforcement Learning",
        certTitle: "Deep Reinforcement Learning Combat Certification",
        image: "assets/rl_realm.jpg",
        xpReward: 200,
        salaryReward: 220000,
        rankTitle: "Deep Reinforcement Knight",
        techStack: ["Gymnasium", "Stable-Baselines3", "PPO", "Neural Networks", "Pygame"],
        lore: "The automated Iron Golems protecting the Forge have forgotten their combat algorithms. Design a custom Gymnasium environment representing the combat arena. Apply the Proximal Policy Optimization (PPO) algorithm to train a deep neural policy network, optimizing combat rewards until the Golem achieves an 85% win rate against the holographic training dummies.",
        glossary: [
            { term: "PPO", def: "Proximal Policy Optimization. An actor-critic policy gradient RL algorithm that optimizes policies incrementally, using clipping to avoid unstable shifts." },
            { term: "Gymnasium", def: "A standardized API library used to construct interactive environment models with reset-loop functions, exposing step action scopes and numeric observations." },
            { term: "Policy Network", def: "A deep neural network that evaluates environment observations and decides the optimal action probability distributions." }
        ]
    },
    4: {
        id: 4,
        name: "Citadel of Minds",
        topic: "Multi-Agent Swarms",
        certTitle: "Multi-Agent Systems & Swarm Engineering Certification",
        image: "assets/agents_realm.jpg",
        xpReward: 250,
        salaryReward: 280000,
        rankTitle: "Multi-Agent Overlord",
        techStack: ["CrewAI", "LangGraph", "AutoGen", "LLaMA 3", "JSON Schemas"],
        lore: "The Citadel's main thinking core is offline. Reconnect it by programming a collaborative multi-agent collective. You must write the orchestration loop creating three distinct agents: a Systems Architect, a Code Constructor, and a Quality Validator. Instruct them to automatically draft, compile, review, and patch microservices in an autonomous loop.",
        glossary: [
            { term: "CrewAI", def: "An agentic framework that packages LLM prompts into structured roles (agents) and defines execution chains (tasks, crews) with custom tools." },
            { term: "LangGraph", def: "A state-based orchestration library by LangChain that models multi-agent behaviors as cyclical graphs with node actions and edge routing." },
            { term: "Sequential Process", def: "An execution topology where task outputs are fed directly into the following agent's input context sequentially, mimicking an assembly line." }
        ]
    },
    5: {
        id: 5,
        name: "Ethereal Nexus",
        topic: "MLOps & Quantization",
        certTitle: "MLOps, Triton, & Edge Quantization Archmage Certification",
        image: "assets/ops_realm.jpg",
        xpReward: 300,
        salaryReward: 350000,
        rankTitle: "Edge AI Archmage",
        techStack: ["Docker", "Triton Inference Server", "TensorRT", "GPTQ / GGUF", "Kubernetes"],
        lore: "The portal at the Ethereal Nexus requires hyper-speed calculations but has limited energy power. Optimize a massive 70B parameter LLM for local deployment. Write the Quantization script converting FP16 weights to 4-bit using GPTQ. Package the model inside Docker with Triton Inference Server, optimizing CUDA caches to handle 10,000 requests per second with microsecond latency.",
        glossary: [
            { term: "GPTQ", def: "Generalized Post-Training Quantization. An algorithm that quantizes weights using second-order Taylor approximations, correcting errors on a dataset slice." },
            { term: "Triton Server", def: "NVIDIA's multi-framework inference server designed for high-concurrency model execution, supporting dynamic batching and concurrent model queues." },
            { term: "Quantization", def: "The process of down-sampling neural network parameters from high-precision data types (FP16/FP32) to low-precision types (INT4/INT8) to save RAM." }
        ]
    }
};

// Compile granular lines into standard FCC 30-step Workshop steps
function compileRealmsSteps() {
    realms[1].steps = buildStepsList(level1Lines);
    realms[2].steps = buildStepsList(level2Lines);
    realms[3].steps = buildStepsList(level3Lines);
    realms[4].steps = buildStepsList(level4Lines);
    realms[5].steps = buildStepsList(level5Lines);
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
    unlockedLevels: [1], 
    completedLevels: [],
    
    // Map tracking completed steps inside each Workshop level: e.g. {1: [1, 2], 2: []}
    completedSteps: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
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

    for (let lvl = 1; lvl <= 5; lvl++) {
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
    if (lvlId === 1) linesArr = level1Lines;
    else if (lvlId === 2) linesArr = level2Lines;
    else if (lvlId === 3) linesArr = level3Lines;
    else if (lvlId === 4) linesArr = level4Lines;
    else if (lvlId === 5) linesArr = level5Lines;

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
    const tabVisualLabs = document.getElementById("tab-visual-labs");
    const contentCurriculum = document.getElementById("curriculum-tab-content");
    const contentVisualLabs = document.getElementById("visual-labs-tab-content");

    if (tabName === "curriculum") {
        tabCurriculum.classList.add("active");
        tabVisualLabs.classList.remove("active");
        contentCurriculum.style.display = "block";
        contentVisualLabs.style.display = "none";
    } else {
        tabCurriculum.classList.remove("active");
        tabVisualLabs.classList.add("active");
        contentCurriculum.style.display = "none";
        contentVisualLabs.style.display = "flex";
        
        // Load default lab
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

// --- 12. INITIALIZATION ON PAGE LOAD ---
window.addEventListener("DOMContentLoaded", () => {
    // Compile steps database dynamically
    compileRealmsSteps();
    
    updateStatsUI();
    updateAchievementsUI();
    updateLeaderboardUI();
    renderCurriculumList();

    // Bind login form elements listeners
    document.getElementById("auth-toggle-link").addEventListener("click", toggleAuthMode);
    document.getElementById("login-form").addEventListener("submit", handleAuthSubmit);

    // Bind Visual Lab tabs and buttons
    document.getElementById("tab-curriculum").addEventListener("click", () => switchHomeTab("curriculum"));
    document.getElementById("tab-visual-labs").addEventListener("click", () => switchHomeTab("labs"));

    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById(`lab-btn-${i}`);
        if (btn) {
            btn.addEventListener("click", () => loadVisualLab(i));
        }
    }

    document.getElementById("play-lab-anim-btn").addEventListener("click", toggleLabAnimation);
    document.getElementById("run-lab-btn").addEventListener("click", executeLabExperiment);

    // Initial silent visual state greeting
    document.getElementById("oracle-state-indicator").textContent = "SYSTEM: READY";

    // Run animation frames
    animateLab();
});
