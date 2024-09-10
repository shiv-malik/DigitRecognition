import React from 'react';
import { Link } from 'react-router-dom';

function About() 
{
    return (
        <div className='aboutContainer'>
            <h1 className='title'>About</h1>
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
            <h2 className='how-it-works'>How the Tool Works</h2>
            <p>
                This tool utilizes a variation of a neural network called a convolutional neural network (CNN), 
                which is better suited for identifying larger patterns, such as the curves and lines that make
                up a handwritten digit. By training images through the MNIST handwritten digit training data, 
                this model has acquired a 99% accuracy.
            </p>

            <h4 className='neural-networks'>What is a Neural Network?</h4>
            <p>
                Classifying handwritten digits may seem like a trival task to people, but how exactly do we do it? 
                For instance, let's take the number 9.There are quite a few ways to draw a 9, and nearly every
                drawing will be unique. So when taking the actual data of the image (analyzing pixel by pixel), 
                none of the images have many similarities at all.
            </p>

            <p>
                The way we, as people, have learned to identify the number 9 is by seeing many different nines 
                throughout our lives. The ability to identify digits is through identify patterns, more specifically, 
                learned patterns, and so it should come as no surprise that a computer will also need to 
                'learn' patterns that comprise these digits.
            </p>

            <p>
                To do this, we utilize neural networks, which were inspired from biological neurology.
                Neural networks function through an interconnected web of neurons that each hold values
                necessary to process data. The network is then 'trained' by uploading thousands of images
                to the network along with its expected value, and over time, the network will pick up on
                patterns and better identify new handwritten digits.
            </p>


            <h2 className='troubleshooting'>Troubleshooting</h2>
            <p>
                If the tool is not correctly calculating the number that is drawn, please understand
                this model is not perfect. In fact, no neural network is perfect. There will be some
                inaccuracies that are unavoidable, but generally, this model performs very well, as tested
                through over 10,000 images with a 99% accuracy.
            </p>

            <p>
                If your uploaded image is having an issue being processed, please ensure the resolution is
                exactly 28x28 and it is either a .JPEG or .PNG file. If either of these conditions are not
                met, the model will be unable to process the image correctly.
            </p>
        </div>
    )
}

export default About;