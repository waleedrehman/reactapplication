import React, { Component } from 'react'
import { Grid, Col } from 'react-bootstrap';
import './Permutation.css';
import axios from 'axios';
import Highlight from './Highlight';

export default class Permutation extends Component {

  constructor() {
    super()
    this.state = {
      result: ''
    }
    this.permute = this.permute.bind(this)
  }

  permute (e) {
    e.preventDefault();
    console.log("what is: " + e.target.input.value)
    axios.get('https://javawebservice.waleedrehman.co.uk/permutation', {
      params: {permuteInt: e.target.input.value}
    }).then(responce => this.setState({result: responce.data.content}))
  }
  
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Permutation</h3>
            <p>This page will be used to call the java-web-service endpoint for permutation, Brief discription explaining permutation problem and how I solved it below:</p>
            <p>The problem presented is given any string with 2 or more digits we should be able to extract all the given digits and generate the list of possible numbers these digits can be used to create in a discending order.</p>
            <p>For example, given the input of "236" the solution should return "632, 623, 362, 326, 263,  236"</p>
            <p>If the input provided is: “A 3B2 C6D”, then your solution should return "632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters  and whitespaces, so an extraction of integers was first made to obtain the correct solution</p>
            <p>The permutation solution has a model and a controller, model or the PermutationDTO class  code is as follows:</p>
            <Highlight language="java">
            {`
package uk.co.waleed.Permutation.Model;
    
public class PermutationDTO {

    private final long id;
    private final String result;

    public PermutationDTO(long id, String result) {
        this.id = id;
        this.result = result;
    }
  
    public long getId() {
        return id;
    }
  
    public String getContent() {
        return result;
    }
}
            `}
            </Highlight>
            <p>The purpose of the DTO (Data Transfer Object) is to carry the data from the point it is created to the end of the process, in this instance it would be used to return the data from the server back to the user no matter where they generate the request from. As part of this solution I also have the Rest Controller for the Permutation calls which gets the permutation request and handles it:</p>
            <Highlight language='java'>
{`
package uk.co.waleed.Permutation.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uk.co.waleed.Permutation.Model.PermutationDTO;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class PermutationController {

    private static final String template = "The permuted value is, %s!";
    private final AtomicLong counter = new AtomicLong();

    @CrossOrigin(origins = "*")
    @RequestMapping("/permutation")
    public PermutationDTO permutation(@RequestParam(value="permuteInt", defaultValue="326") String permuteInt) {
        ArrayList<Integer> listOfNumbers = new ArrayList<Integer>();

        for(char ch : permuteInt.toCharArray()){
            if(Character.isDigit(ch)){
                listOfNumbers.add(Character.getNumericValue(ch));
            }
        }

        if (listOfNumbers == null || listOfNumbers.isEmpty()){
            //throw new NumberFormatException("The input entered doesn't have any digits " + permuteInt);
            return new PermutationDTO(counter.incrementAndGet(),
                    String.format(template, "The input entered doesn't have any digits '" + permuteInt + "'"));
        }

        System.out.println("You entered "+ permuteInt);
        System.out.println("The digits in the input are " + listOfNumbers.toString());
        ArrayList<String> result = new ArrayList<String>();
        permute(listOfNumbers.toArray(),0,result);
        //if we get 123 the result should be 123,132,213,231,312,321
        String res = "";
        Collections.sort(result, Collections.reverseOrder());
        for (int i = 0; i<result.size();i++){
            if (i == result.size()-1){
                res += result.get(i);
            }
            else {
                res += result.get(i) + ", ";
            }
        }
        System.out.println(res);
        //setResult(res);
        System.out.println("Thanks and goodbye");

        return new PermutationDTO(counter.incrementAndGet(),
                            String.format(template, res));
    }

    private static void permute(Object[] values, int index, ArrayList<String> res)
    {
        String result = "";
        Object[] num = Arrays.copyOf(values, values.length);
        if(index==num.length-1)
        {
            for(int j=0;j<num.length;j++)
            {
                result += num[j];
            }
            res.add(result);
        }
        else
        {
            for(int i=index;i<num.length;i++)
            {
                int temp;
                temp= (int) num[i];
                num[i]=num[index];
                num[index]=temp;

                permute(num,index+1,res);
            }
        }
    }
}
`}
            </Highlight>
            <p>The rest controller gets a string which gets passed to the permutation end point, this could be through Curl command or the React website, Once the input is recieved the controller loops through the characters to see if there are any digits in the string passed in, if there are digits then we are happy with the input and we can just extract the digits as our input for permute, if there are no digits in the input provided we just send a message back to the user as we need digits to be able to do the permutation.</p>
            <p>Once we are happy with the input we build an array of possible outcomes based on the digits passed in as part of the input. We then send the possible outcomes back to the user.</p>
            <p>In both of these instance we are using the DTO to send the data back to the user.</p>
            <p>The web service can be queried by curl command or the form bellow or even any other way to send a GET request to the server i.e postman etc</p>
            <p>To use curl run the following command in a bash terminal by changing the value of permuteInt to the input you want to permutate</p>
            <Highlight language='bash'>
              curl https://javawebservice.waleedrehman.co.uk/permutation?permuteInt=123
            </Highlight>
            <p>Or use the form bellow:</p>
            <form onSubmit={this.permute}>
              <input name="input"></input><button>Permute</button>
            </form>
            <p>{this.state.result}</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
