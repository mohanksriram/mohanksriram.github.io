---
title: "Learning to Learn"
author: Mohankumar Sriram
tags: [Meta-Learning]
image: img/one-shot-post/learn-to-learn.jpg
date: "2019-05-17T10:00:00.000Z"
draft: false
---


Welcome to our first post on meta-learning! Although I would have loved to address a wide audience, I had to invariably make a few assumptions about the audience for this post. Please refer to the pre-requisites at the tail-end of the post before proceeding to read. 

![logo](./img/one-shot-post/learn-to-learn.jpg)

### What is the problem?

Two aspects of human conceptual knowledge have eluded exisiting machine learning systems:
- People can learn a new concept from one or a handful of examples. Eg: We don't touch a hot stove twice ;), We don't wait for the batteries to run out before plugging in the charger. 
- People learn richer representations than machines do, even for simple concepts, using them for wide range of functions
  including creating new examples, parsing objects into parts and relations, and creating new abstract categories of   objects based on existing categories. Eg: We come up with myriad of reasons for why our best friend didn't reply immediately to our text,  

### Why should we solve this problem?
- Modern deep learning approaches require tons of training data to perform super-human yet narrow range of tasks.
    (Read GPT-2, Bert, and you Alpha Zero!)
- These approaches are cost intensive, and resource intensive.
- With the Learning to learn* approach, Machines can work using a more generalizable model with easily adaptible parameters.
- This model can parse knowledge from past tasks to accomplish a wide variety of new tasks using very few examples or training data.

tl;dr: Less data, Less training, Less compute, More profits

##### * Learning to learn
- The Ability to perform previously unseen tasks with a handful of examples is the "to learn" part.
- The way in which a machine gains this ability is termed as "Learning to learn".

### What are the existing state of the art techniques to solve the problem?
- Prototypical-Nets
- MAML
- Memory Mod
- Neural Statistician
- Matching Nets
- Reptile + Transduction

1: [Few shot learning: Papers with code](https://www.paperswithcode.com/sota/few-shot-image-classification-on-omniglot-1)

![banner](./img/one-shot-post/banner.jpg)

### Our Approach
- Model-Agnostic Meta-Learning (MAML)
- If possible, we will cover Probabilistic Model-Agnostic Meta-Learning 

##### Key concept:
- Produces a weight initialization that results in easily adaptable model parameters through gradient descent.

#### Show me the code!


```python

```


```python

```


```python

```


```python

```

#### Dependencies
- Anaconda: v4.5.12
- Pytorch: v1.1

#### Commands used:
```
conda install pytorch-cpu torchvision-cpu -c pytorch
conda install -c conda-forge click 

```

### Pre-requisites
- Artificial Neural Networks - Strucuture, Training and Scoring
- Reinforcement Learning - Markov Decision Processes.

### Reference
1. [Few shot learning: Papers with code](https://www.paperswithcode.com/sota/few-shot-image-classification-on-omniglot-1)
2. [Chelsea Finn's Blog](https://bair.berkeley.edu/blog/2017/07/18/learning-to-learn/)


```python

```
