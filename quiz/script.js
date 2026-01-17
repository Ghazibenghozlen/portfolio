/**
 * Quiz Logic
 */
const quizForm = document.getElementById('quiz-form');
if (quizForm) {
    const mlQuestions = [
        {
            q: "What is the main difference between Supervised and Unsupervised learning?",
            options: ["Supervised uses labeled data, Unsupervised uses unlabeled data", "Supervised is faster", "Unsupervised uses neural networks only"],
            correct: 0
        },
        {
            q: "Which problem does Overfitting correspond to?",
            options: ["High Bias", "High Variance", "Low Variance"],
            correct: 1
        },
        {
            q: "Which algorithm is commonly used for clustering?",
            options: ["Linear Regression", "K-Means", "Logistic Regression"],
            correct: 1
        },
        {
            q: "In a Confusion Matrix, what does 'True Positive' mean?",
            options: ["Model predicted positive and it was false", "Model predicted positive and it was true", "Model predicted negative and it was true"],
            correct: 1
        },
        {
            q: "Which metric is best for imbalanced classification datasets?",
            options: ["Accuracy", "F1 Score", "Mean Squared Error"],
            correct: 1
        },
        {
            q: "What is a Hyperparameter in Machine Learning?",
            options: ["A parameter learned during training", "A configuration set before training", "The output of the model"],
            correct: 1
        },
        {
            q: "Which of these is a valid Loss Function for Regression?",
            options: ["Cross-Entropy", "Mean Squared Error (MSE)", "Accuracy"],
            correct: 1
        },
        {
            q: "What is Random Forest?",
            options: ["A single Decision Tree", "A collection of Decision Trees (Ensemble)", "A Clustering algorithm"],
            correct: 1
        },
        {
            q: "What does the 'k' in K-Nearest Neighbors stand for?",
            options: ["Kernel size", "Number of clusters", "Number of neighbors to consider"],
            correct: 2
        },
        {
            q: "Which of the following is NOT a type of Machine Learning?",
            options: ["Supervised Learning", "Unsupervised Learning", "Deductive Learning"],
            correct: 2
        },
        {
            q: "What is the typical train/test split ratio?",
            options: ["50/50", "80/20", "10/90"],
            correct: 1
        },
        {
            q: "What does SVM stand for?",
            options: ["Simple Vector Machine", "Standard Variance Model", "Support Vector Machine"],
            correct: 2
        },
        {
            q: "In Reinforcement Learning, what 'learns' by interacting with the environment?",
            options: ["The Agent", "The Policy", "The Reward"],
            correct: 0
        },
        {
            q: "What is the bias-variance tradeoff?",
            options: ["Balancing model complexity to minimize total error", "Choosing between two different datasets", "Trading speed for accuracy"],
            correct: 0
        },
        {
            q: "What type of problem is 'Spam Detection'?",
            options: ["Regression", "Clustering", "Classification"],
            correct: 2
        },
        {
            q: "What is 'Precision' in classification?",
            options: ["Total correct predictions / Total predictions", "True Positives / (True Positives + False Positives)", "True Positives / (True Positives + False Negatives)"],
            correct: 1
        },
        {
            q: "Which technique is used to reduce dimensionality?",
            options: ["PCA (Principal Component Analysis)", "Linear Regression", "Gradient Boosting"],
            correct: 0
        },
        {
            q: "In Decision Trees, what is 'Pruning'?",
            options: ["Adding more branches", "Removing parts of the tree to reduce complexity and overfitting", "Coloring the nodes"],
            correct: 1
        },
        {
            q: "Which algorithm is an Ensemble method?",
            options: ["Decision Tree", "XGBoost", "Logistic Regression"],
            correct: 1
        },
        {
            q: "Which of these is a Stochastic Optimization algorithm?",
            options: ["Adam", "Batch Gradient Descent", "Both A and B"],
            correct: 0
        },
        {
            q: "What is the goal of a Recommendation System?",
            options: ["To classify images", "To predict user preferences and suggest items", "To translate languages"],
            correct: 1
        },
        {
            q: "What is 'Feature Scaling'?",
            options: ["Selecting important features", "Normalizing the range of independent variables", "Creating new features"],
            correct: 1
        },
        {
            q: "Which model is known as a 'Black Box'?",
            options: ["Linear Regression", "Deep Neural Network", "Decision Tree"],
            correct: 1
        },
        {
            q: "What is 'Bagging' in ensemble learning?",
            options: ["Bootstrap Aggregating", "Backward Aggregating", "Binary Aggregating"],
            correct: 0
        },
        {
            q: "What is the difference between L1 and L2 regularization?",
            options: ["L1 adds absolute value of weights, L2 adds squared value", "L1 is for regression, L2 for classification", "There is no difference"],
            correct: 0
        },
        {
            q: "What is 'Reinforcement Learning' based on?",
            options: ["Supervised labels", "Reward and Punishment", "Unsupervised clustering"],
            correct: 1
        },
        {
            q: "In K-Means clustering, what does 'K' represent?",
            options: ["The number of iterations", "The number of clusters", "The learning rate"],
            correct: 1
        },
        {
            q: "What is the 'Kernel Trick' used for in SVM?",
            options: ["To speed up training", "To map data into a higher-dimensional space", "To reduce dimensionality"],
            correct: 1
        },
        {
            q: "Which metric is commonly used for Regression problems?",
            options: ["Accuracy", "RMSE (Root Mean Squared Error)", "F1-Score"],
            correct: 1
        },
        {
            q: "What is 'Grid Search' used for?",
            options: ["Finding the best hyperparameters", "Visualizing grid data", "Searching the web"],
            correct: 0
        },
        {
            q: "What does 'k-fold Cross Validation' entail?",
            options: ["Splitting data into k subsets and training k times", "Training the model k times on the same data", "Checking k parameters"],
            correct: 0
        },
        {
            q: "What is 'Label Encoding'?",
            options: ["Converting text labels into unique integers", "Converting integers to text", "Encryption"],
            correct: 0
        },
        {
            q: "What is the primary goal of PCA?",
            options: ["Classification", "Clustering", "Dimensionality Reduction"],
            correct: 2
        },
        {
            q: "Which algorithm constructs a hyperplane to separate classes?",
            options: ["K-Means", "SVM", "Decision Tree"],
            correct: 1
        },
        {
            q: "Which is a disadvantage of Decision Trees?",
            options: ["Hard to interpret", "Prone to overfitting", "Requires feature scaling"],
            correct: 1
        },
        {
            q: "What does 'Ensemble Learning' improve?",
            options: ["Model Generalization and Accuracy", "Training Speed", "Data Size"],
            correct: 0
        },
        {
            q: "What is 'Naive Bayes' based on?",
            options: ["Neural Networks", "Bayes' Theorem with independence assumptions", "Decision Trees"],
            correct: 1
        },
        {
            q: "What is 'Underfitting'?",
            options: ["Model is too complex", "Model is too simple and fails to capture patterns", "Model has perfect accuracy"],
            correct: 1
        },
        {
            q: "What is 'A/B Testing' used for?",
            options: ["Comparing two versions to determine which performs better", "Testing hardware", "Debugging code"],
            correct: 0
        },
        {
            q: "What does 'ROC-AUC' measure?",
            options: ["Training speed", "Model's ability to distinguish between classes", "Data size"],
            correct: 1
        },
        {
            q: "What is 'Time Series Analysis'?",
            options: ["Analyzing data points ordered in time", "Measuring training time", "Sorting algorithms"],
            correct: 0
        },
        {
            q: "What is 'Anomaly Detection'?",
            options: ["Finding the average value", "Identifying data points that deviate from normal behavior", "Normalizing data"],
            correct: 1
        },
        {
            q: "What is 'Polynomial Regression'?",
            options: ["Linear regression with polynomial features", "A clustering algorithm", "A classification method"],
            correct: 0
        },
        {
            q: "What is the 'Elbow Method' used for?",
            options: ["Determining optimal number of clusters in K-Means", "Finding learning rate", "Selecting features"],
            correct: 0
        },
        {
            q: "What is 'Collaborative Filtering'?",
            options: ["A recommendation technique based on user-item interactions", "Data cleaning method", "Feature extraction"],
            correct: 0
        },
        {
            q: "What is 'Bootstrapping' in statistics?",
            options: ["Starting a computer", "Resampling with replacement to estimate statistics", "Creating new features"],
            correct: 1
        },
        {
            q: "What is 'Silhouette Score'?",
            options: ["Measures how similar an object is to its own cluster vs other clusters", "Training accuracy", "Loss function"],
            correct: 0
        },
        {
            q: "What is 'Multi-Armed Bandit'?",
            options: ["A type of neural network", "A problem in reinforcement learning about optimal resource allocation", "A classification algorithm"],
            correct: 1
        },
        {
            q: "What is 'Imputation'?",
            options: ["Removing all missing data", "Filling in missing values with estimated ones", "Deleting features"],
            correct: 1
        }
    ];

    const dlQuestions = [
        {
            q: "Who is often called the 'Godfather of Deep Learning'?",
            options: ["Andrew Ng", "Geoffrey Hinton", "Elon Musk"],
            correct: 1
        },
        {
            q: "Which architecture is best suited for image recognition?",
            options: ["RNN (Recurrent Neural Network)", "CNN (Convolutional Neural Network)", "Transformer"],
            correct: 1
        },
        {
            q: "What does the 'ReLU' activation function return for negative inputs?",
            options: ["-1", "0", "The input value itself"],
            correct: 1
        },
        {
            q: "What is the primary advantage of a Transformer over an RNN?",
            options: ["It processes data sequentially", "It allows for parallelization via Self-Attention", "It uses fewer parameters"],
            correct: 1
        },
        {
            q: "In a visual processing CNN, what do early layers typically detect?",
            options: ["Complete objects (faces, cars)", "Edges and Textures", "Emotions"],
            correct: 1
        },
        {
            q: "What is 'Fine-Tuning' in the context of LLMs?",
            options: ["Adjusting hyperparams only", "Training a pre-trained model on a smaller, specific dataset", "Training from scratch"],
            correct: 1
        },
        {
            q: "Which loss function is standard for Multi-Class Classification?",
            options: ["Categorical Cross-Entropy", "Binary Cross-Entropy", "Mean Squared Error"],
            correct: 0
        },
        {
            q: "What does a 'Stride' of 2 do in a Convolutional Layer?",
            options: ["Doubles the output size", "Halves the output dimension (downsamples)", "Does nothing"],
            correct: 1
        },
        {
            q: "What is the 'Latent Space' in an Autoencoder?",
            options: ["The input layer", "The compressed representation of data in the middle", "The output layer"],
            correct: 1
        },
        {
            q: "Which company developed PyTorch?",
            options: ["Google", "Facebook (Meta)", "Microsoft"],
            correct: 1
        },
        {
            q: "What is 'Max Pooling' used for?",
            options: ["Increasing data size", "Downsampling and extracting dominant features", "Regularization"],
            correct: 1
        },
        {
            q: "What problem do Residual Connections (Skip Connections) solve?",
            options: ["Overfitting", "Vanishing Gradient in deep networks", "Underfitting"],
            correct: 1
        },
        {
            q: "Which famous network won the ImageNet competition in 2012?",
            options: ["ResNet", "AlexNet", "VGG-16"],
            correct: 1
        },
        {
            q: "What is 'Temperature' in the context of Softmax/LLM sampling?",
            options: ["Measuring GPU heat", "A parameter controlling randomness of predictions", "The learning rate"],
            correct: 1
        },
        {
            q: "What does 'BERT' stand for?",
            options: ["Bidirectional Encoder Representations from Transformers", "Basic Encoder Recurrent Transformer", "Binary Encoded Recursive Tensor"],
            correct: 0
        },
        {
            q: "Which optimizer is generally considered the best default choice?",
            options: ["SGD", "Adam", "RMSProp"],
            correct: 1
        },
        {
            q: "What is a 'Tensor Processing Unit' (TPU)?",
            options: ["A software library", "Specialized hardware designed by Google for neural network acceleration", "A type of CPU"],
            correct: 1
        },
        {
            q: "In an LSTM, what is the role of the 'Forget Gate'?",
            options: ["To delete the entire model", "To decide what information to discard from the cell state", "To reset weights"],
            correct: 1
        },
        {
            q: "What is 'Style Transfer'?",
            options: ["Copying code styles", "Applying the artistic style of one image to the content of another", "Transferring data"],
            correct: 1
        },
        {
            q: "What is 'Federated Learning'?",
            options: ["Training across multiple decentralized devices holding local data samples", "Learning from government data", "Combining multiple models"],
            correct: 0
        },
        // Advanced
        {
            q: "What does the 'Attention is All You Need' paper introduce?",
            options: ["The Transformer Architecture", "GANs", "ResNets"],
            correct: 0
        },
        {
            q: "What is 'Zero-Shot Learning'?",
            options: ["Learning with no data", "Model predicting classes it has never seen during training", "Training with zero errors"],
            correct: 1
        },
        {
            q: "Which activation function solves the 'Dying ReLU' problem?",
            options: ["Sigmoid", "Leaky ReLU", "Tanh"],
            correct: 1
        },
        {
            q: "What is 'Knowledge Distillation'?",
            options: ["Cleaning data", "Transferring knowledge from a large 'Teacher' model to a smaller 'Student' model", "Removing neurons"],
            correct: 1
        },
        {
            q: "What is the primary component of a GAN's Generator?",
            options: ["To classify images", "To create fake data that looks real", "To grade the Discriminator"],
            correct: 1
        },
        {
            q: "What is 'Data Augmentation' in image processing?",
            options: ["Deleting images", "Artificially expanding training data by transformations (rotation, flip, etc.)", "Compressing images"],
            correct: 1
        },
        {
            q: "What does 'GPT' stand for?",
            options: ["General Purpose Transformer", "Generative Pre-trained Transformer", "Gradient Processing Tool"],
            correct: 1
        },
        {
            q: "What is the purpose of 'Padding' in CNNs?",
            options: ["To increase computational cost", "To preserve spatial dimensions after convolution", "To remove noise"],
            correct: 1
        },
        {
            q: "Which technique combines multiple models to improve predictions?",
            options: ["Ensemble Learning", "Single Model Training", "Data Deletion"],
            correct: 0
        },
        {
            q: "What is 'Batch Size' in neural network training?",
            options: ["Total number of epochs", "Number of samples processed before updating weights", "The size of the dataset"],
            correct: 1
        },
        {
            q: "What is the 'Discriminator' in a GAN?",
            options: ["Generates fake data", "Evaluates whether data is real or fake", "Deletes bad data"],
            correct: 1
        },
        {
            q: "Which normalization technique is applied per-sample in a batch?",
            options: ["Batch Normalization", "Layer Normalization", "Data Normalization"],
            correct: 1
        },
        {
            q: "What does 'Pre-training' refer to in Transfer Learning?",
            options: ["Testing before deployment", "Training a model on a large dataset before fine-tuning", "Training without data"],
            correct: 1
        },
        {
            q: "What is 'Exploding Gradient'?",
            options: ["Gradients becoming too small", "Gradients becoming excessively large, causing instability", "Gradients staying constant"],
            correct: 1
        },
        {
            q: "Which architecture introduced 'Skip Connections'?",
            options: ["AlexNet", "ResNet", "VGG"],
            correct: 1
        },
        {
            q: "What is the main innovation of 'EfficientNet'?",
            options: ["Using only CPUs", "Compound scaling of depth, width, and resolution", "Removing all convolutions"],
            correct: 1
        },
        {
            q: "What is 'Object Detection'?",
            options: ["Classifying entire images", "Identifying and locating objects within images", "Counting pixels"],
            correct: 1
        },
        {
            q: "What does 'Inception Module' introduce?",
            options: ["Multiple filter sizes in parallel", "Only 1x1 convolutions", "No pooling layers"],
            correct: 0
        },
        {
            q: "What is 'DeepDream'?",
            options: ["A sleep monitoring app", "An algorithm that over-interprets patterns in images", "A database system"],
            correct: 1
        },
        {
            q: "What is 'Neural Architecture Search' (NAS)?",
            options: ["Manually designing networks", "Automatically finding optimal network architectures", "Searching databases"],
            correct: 1
        },
        {
            q: "What is 'Curriculum Learning'?",
            options: ["Learning in schools", "Training models by gradually increasing task difficulty", "Random training order"],
            correct: 1
        },
        {
            q: "What is 'Contrastive Learning'?",
            options: ["Adjusting brightness", "Learning representations by contrasting similar and dissimilar samples", "Color correction"],
            correct: 1
        },
        {
            q: "What is a 'Siamese Network'?",
            options: ["Two identical subnetworks sharing weights", "A network from Thailand", "A single layer network"],
            correct: 0
        },
        {
            q: "What is 'Neural Style Transfer' based on?",
            options: ["Copying entire images", "Separating and recombining content and style representations", "Image compression"],
            correct: 1
        },
        {
            q: "What is 'MobileNet' optimized for?",
            options: ["Server GPUs", "Mobile and embedded devices with limited resources", "Quantum computers"],
            correct: 1
        },
        {
            q: "What is 'Depthwise Separable Convolution'?",
            options: ["Standard convolution", "Efficient convolution factorized into depthwise and pointwise operations", "3D convolution"],
            correct: 1
        },
        {
            q: "What is 'Self-Supervised Learning'?",
            options: ["Supervised with labels", "Learning from unlabeled data by creating pretext tasks", "Unsupervised clustering"],
            correct: 1
        },
        {
            q: "What is 'Few-Shot Learning'?",
            options: ["Training with very few examples per class", "Training for a few epochs", "Using few parameters"],
            correct: 0
        },
        {
            q: "What is 'Pruning' in neural networks?",
            options: ["Adding more neurons", "Removing unnecessary weights or neurons to reduce model size", "Training longer"],
            correct: 1
        }
    ];

    let currentQuestions = [];
    let currentTopic = 'ml'; // Default

    function getRandomQuestions(n) {
        const pool = currentTopic === 'ml' ? mlQuestions : dlQuestions;
        // Fix: Ensure we don't prefer empty slots if array size < n
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }

    function renderQuiz() {
        quizForm.innerHTML = ''; // Clear existing
        currentQuestions = getRandomQuestions(10); // Get 10 random questions

        currentQuestions.forEach((q, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'question-item';
            let optionsHtml = '';
            q.options.forEach((opt, optIndex) => {
                optionsHtml += `
            <label class="option-label">
                <input type="radio" name="q${index}" value="${optIndex}">
                ${opt}
            </label>
        `;
            });

            questionEl.innerHTML = `
        <p class="question-text">${index + 1}. ${q.q}</p>
        <div class="options-grid">
            ${optionsHtml}
        </div>
        <div class="correct-answer-text" id="ans-${index}">Correct Answer: ${q.options[q.correct]}</div>
    `;
            quizForm.appendChild(questionEl);
        });
    }

    // Toggle Logic
    const topicBtns = document.querySelectorAll('.topic-btn');
    const quizTitle = document.getElementById('quiz-title');

    topicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            topicBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            // Set topic
            currentTopic = btn.getAttribute('data-topic');
            // Update title
            if (quizTitle) {
                quizTitle.textContent = currentTopic === 'ml' ? 'Machine Learning Quiz' : 'Deep Learning Quiz';
            }
            // Reset UI
            document.getElementById('result-box').classList.remove('visible');
            document.getElementById('submit-quiz').style.display = 'block';
            // Re-render
            renderQuiz();
        });
    });

    // Initial Render
    renderQuiz();

    // Handle Submit
    const submitBtn = document.getElementById('submit-quiz');
    const resetBtn = document.getElementById('reset-quiz');
    const resultBox = document.getElementById('result-box');

    // Hide reset button initially or manage visibility with result box
    // Since reset button is INSIDE result box, it handles itself via result box visibility

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let score = 0;
        let allAnswered = true;

        // Check if all answered first (optional, but good UX)
        // For now, just grade what's there

        currentQuestions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            const answerText = document.getElementById(`ans-${index}`);
            const questionItem = quizForm.children[index];
            // Better to select inputs within the container in case of dynamic re-ordering, 
            // but index matches here.

            // Reset styles first
            const labels = questionItem.querySelectorAll('.option-label');
            labels.forEach(l => {
                l.style.border = "none";
                l.style.background = "rgba(255, 255, 255, 0.05)";
            });


            if (selected) {
                if (parseInt(selected.value) === q.correct) {
                    score++;
                    selected.parentElement.style.border = "1px solid #64ffda";
                    selected.parentElement.style.background = "rgba(100, 255, 218, 0.1)";
                } else {
                    selected.parentElement.style.border = "1px solid #ff6b6b";
                    selected.parentElement.style.background = "rgba(255, 107, 107, 0.1)";
                    answerText.style.display = "block";
                }
            } else {
                answerText.style.display = "block";
                answerText.innerText += " (No answer selected)";
            }
        });

        const scoreVal = document.getElementById('score-val');
        const scoreMsg = document.getElementById('score-msg');

        scoreVal.innerText = score;
        resultBox.classList.add('visible');
        submitBtn.style.display = 'none'; // Hide submit button after submission

        if (score === currentQuestions.length) {
            scoreMsg.innerText = "Perfect Score! You are an AI Expert!";
            scoreMsg.style.color = "var(--primary-color)";
        } else if (score >= currentQuestions.length / 2) {
            scoreMsg.innerText = "Good job! Keep learning.";
            scoreMsg.style.color = "var(--text-main)";
        } else {
            scoreMsg.innerText = "Keep practicing!";
            scoreMsg.style.color = "var(--accent-color)";
        }

        // Scroll to results
        resultBox.scrollIntoView({ behavior: 'smooth' });
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resultBox.classList.remove('visible');
            submitBtn.style.display = 'block'; // Show submit button again
            submitBtn.style.width = '100%';

            // Wait for transition
            setTimeout(() => {
                renderQuiz();
                // Scroll back to top of quiz
                document.querySelector('.section-header').scrollIntoView({ behavior: 'smooth' });
            }, 300);
        });
    }
}
