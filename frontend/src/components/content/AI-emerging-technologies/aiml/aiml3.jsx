import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import {
    FiSettings, FiLink, FiShield, FiBarChart2,
    FiCloud, FiTool
} from "react-icons/fi";
import Trackpng from "../../../../../public/images/2.webp";

const aiStack = [
    {
        title: "AI Frameworks",
        icon: FiSettings,
        items: ["TensorFlow", "PyTorch", "Keras", "JAX", "ONNX"]
    },
    {
        title: "ML Algorithms",
        icon: FiTool,
        items: ["Linear Regression", "SVM", "Random Forest", "K-Means", "XGBoost"]
    },
    {
        title: "Data Engineering",
        icon: FiCloud,
        items: ["Data Cleaning", "Feature Engineering", "ETL Pipelines", "BigQuery", "Airflow"]
    },
    {
        title: "Model Deployment",
        icon: FiLink,
        items: ["FastAPI", "Flask", "TensorFlow Serving", "ONNX Runtime", "AWS SageMaker"]
    },
    {
        title: "Monitoring & Analytics",
        icon: FiBarChart2,
        items: ["MLflow", "Weights & Biases", "Prometheus", "Grafana", "Custom Dashboards"]
    },
    {
        title: "Security & Ethics",
        icon: FiShield,
        items: ["Bias Detection", "Model Explainability", "Differential Privacy", "Data Governance", "Fairness Metrics"]
    }
];

const renderCategoryGrid = (stack) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {stack.map((category, index) => (
            <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-gray-400/20 hover:border-gray-400/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-gray-500/10"
            >
                <div className="absolute -inset-px rounded-3xl -z-10" />
                <div className="flex items-center mb-6 space-x-4">
                    <div className="p-3 rounded-xl bg-gray-400/10 backdrop-blur-sm">
                        <category.icon className="text-3xl text-white" />
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent">
                        {category.title}
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {category.items.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                        >
                            <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                            <span className="text-gray-300 text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

const AIIntegrationStack = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full text-white">
            <Helmet>
                <title>AI & Machine Learning Services | Scalable ML Solutions</title>
                <meta
                    name="description"
                    content="Explore scalable AI/ML services including model development, deployment, monitoring, and data engineering."
                />
            </Helmet>

            <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20">
                <div className="text-center mb-12 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-4 unbounded">
                        Scalable <span className="px-4 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-purple-500 text-white">AI/ML</span> Solutions
                    </h1>
                    <p className="text-lg text-gray-300">
                        Build intelligent, secure, and ethical AI systems tailored to your business needs.
                    </p>
                </div>

                <div className="w-full flex flex-col items-center gap-6 mt-10">
                    <img
                        src={Trackpng}
                        alt="Development Pipeline"
                        className="w-full h-auto max-w-3xl rounded-2xl"
                    />
                </div>
            </div>

            <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center mb-10 gap-4">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-br from-gray-500 via-white to-gray-500 text-black text-2xl md:text-3xl">
                        AI/ML Technology Stack
                    </span>
                </div>
                {renderCategoryGrid(aiStack)}
            </div>

            <div className="w-full flex justify-center px-4 py-10">
                <div className="w-full max-w-3xl p-8 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-800 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700 blur-3xl opacity-20 animate-pulse z-0"></div>
                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Build Smarter Systems?
                        </h2>
                        <p className="text-gray-200 mb-6">
                            Get started with cutting-edge AI tools, expert guidance, and future-ready deployment options.
                        </p>
                        <button
                            onClick={() => navigate("/contact")}
                            className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition-all duration-300"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIIntegrationStack;
