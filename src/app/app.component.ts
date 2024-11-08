import { Component, ViewEncapsulation } from '@angular/core';
import { JsonComparisonService } from './json-comparison.service';
import * as DeepDiff from 'deep-diff';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor, NgIf } from '@angular/common';
import { diffWords } from 'diff';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule,NgIf, NgFor],
  standalone: true,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None  // Disable view encapsulation
})
export class AppComponent {

  
  

lhsJson = {
  "Report_Ref": {
      "values": "Major"
  },
  "Accountable_Function": {
      "values": ""
  },
  "Process_Area": {
      "values": "General"
  },
  "Repeat_Finding": {
      "values": ""
  },
  "Issue_Cause_Type": {
      "values": "Design Effectiveness"
  },
  "Issue_Header": {
      "values": "Digital Tools and Automation Deployments not Assessed for SOX or PII Applicability"
  },
  "Issue": {
      "values": " Revised Issue Statement: The GS Intelligent Automation team or Citizen Developed have not performed compliance assessments on digital tools and automations deployed to determine if they are subject to SOX or PII data classification. One of the four GS IA deployments tested supports a key SOX process in the area of A2R and Inventory Management in GMED. However, this Alteryx workflow and subsequent output are not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements.\nIS/ISO/IEC 27001 : 2022\n- Section 5.37 Documented operating procedures\n    - Section 8.34 Protection of information systems during audit testing\n    - Section 4.1 Understanding the organization and its context\n    - Section 4.2 Understanding the needs and expectations of interested parties"
  },
  "Root_Cause": {
      "values": " Root Cause: The GS Intelligent Automation team or Citizen Developed did not perform compliance assessments on digital tools and automations deployed to determine if they are subject to SOX or PII data classification. This was due to the lack of established guidelines and procedures for conducting compliance assessments. As a result, the Alteryx workflow and subsequent output supporting a key SOX process in the area of A2R and Inventory Management in GMED were not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements.TERMINATE"
  },
  "Impact": {
      "values": " Impact Statement:\n\nThe lack of compliance assessments on digital tools and automations deployed by the GS Intelligent Automation team or Citizen Developed poses a significant threat to the business. The Alteryx workflow and subsequent output, which supports a key SOX process in the area of A2R and Inventory Management in GMED, are not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements. This non-compliance could result in inaccurate financial reporting, leading to potential regulatory penalties, reputational damage, and financial loss. It is imperative to perform compliance assessments on all digital tools and automations deployed to determine if they are subject to SOX or PII data classification to ensure the validity of critical processes and maintain compliance with regulatory requirements. Failure to do so could result in severe consequences for the business.TERMINATE"
  },
  "Recommendation": {
      "values": " Issue Statement: The GS Intelligent Automation team or Citizen Developed have not performed compliance assessments on digital tools and automations deployed to determine if they are subject to SOX or PII data classification. One of the four GS IA deployments tested supports a key SOX process in the area of A2R and Inventory Management in GMED. However, this Alteryx workflow and subsequent output are not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements.\n\nRecommendation:\n\n1. The GS Intelligent Automation team and Citizen Developed should perform compliance assessments on all digital tools and automations deployed to determine if they are subject to SOX or PII data classification. This assessment should be conducted before deploying any new digital tools or automations.\n\n2. The Alteryx workflow and subsequent output that supports a key SOX process in the area of A2R and Inventory Management in GMED should be listed on relevant Critical Reports & Spreadsheet listings. This will ensure that the workflow is subject to annual testing per SOX 404 requirements.\n\n3. The GS Intelligent Automation team and Citizen Developed should establish a process to ensure that all digital tools and automations are subject to annual testing per SOX 404 requirements. This process should be documented and communicated to all relevant stakeholders.\n\n4. The GS Intelligent Automation team and Citizen Developed should ensure that all digital tools and automations that handle PII data are subject to appropriate data classification and protection measures. This will ensure compliance with relevant data protection regulations.\n\n5. The GS Intelligent Automation team and Citizen Developed should provide training to all relevant stakeholders on the importance of compliance assessments and annual testing of digital tools and automations. This will ensure that all stakeholders are aware of their responsibilities and the importance of compliance.TERMINATE.TERMINATE.TERMINATE."
  },
  "Management_Response": {
      "values":  " Issue Statement: The GS Intelligent Automation team or Citizen Developed have not performed compliance assessments on digital tools and automations deployed to determine if they are subject to SOX or PII data classification. One of the four GS IA deployments tested supports a key SOX process in the area of A2R and Inventory Management in GMED. However, this Alteryx workflow and subsequent output are not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements. Recommendation: 1. The GS Intelligent Automation team and Citizen Developed should perform compliance assessments on all digital tools and automations deployed to determine if they are subject to SOX or PII data classification. This assessment should be conducted before deploying any new digital tools or automations. 2. The Alteryx workflow and subsequent output that supports a key SOX process in the area of A2R and Inventory Management in GMED should be listed on relevant Critical Reports & Spreadsheet listings. This will ensure that the workflow is subject to annual testing per SOX 404 requirements. 3. The GS Intelligent Automation team and Citizen Developed should establish a process to ensure that all digital tools and automations are subject to annual testing per SOX 404 requirements. This process should be documented and communicated to all relevant stakeholders. 4. The GS Intelligent Automation team and Citizen Developed should ensure that all digital tools and automations that handle PII data are subject to appropriate data classification and protection measures. This will ensure compliance with relevant data protection regulations. 5. The GS Intelligent Automation team and Citizen Developed should provide training to all relevant stakeholders on the importance of compliance assessments and annual testing of digital tools and automations. This will ensure that all stakeholders are aware of their responsibilities and the importance of compliance.TERMINATE.TERMINATE.TERMINATE."

  },
  "Accountable_Contact": {
      "values": ""
  },
  "Agreed_Remediation_Date": {
      "values": ""
  },
  "_id": {
      "values": "2"
  },
  "_field": {
      "values": "it some"
  }
};



  rhsJson = {
    "Report_Ref": {
        "values": "Major"
    },
    "Accountable_Function": {
        "values": ""
    },
    "Process_Area": {
        "values": "General"
    },
    "Repeat_Finding": {
        "values": ""
    },
    "Issue_Cause_Type": {
        "values": "Design Effective"
    },
    "Issue_Header": {
        "values": "Digital Tools and Automation Deployments not Assessed for SOX or PII Applicability"
    },
    "Issue": {
        "values": " Revised Issue Statement: The GS Intelligent Automation team or Citizen Developed have not performed compliance assessments on digital tools and automations deployed to determine if they are subject to SOX or PII data classification. One of the four GS IA deployments tested supports a key SOX process in the area of A2R and Inventory Management in GMED. However, this Alteryx workflow and subsequent output are not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements.\nIS/ISO/IEC 27001 : 2022\n- Section 5.37 Documented operating procedures\n    - Section 8.34 Protection of information systems during audit testing\n    - Section 4.1 Understanding the organization and its context\n    - Section 4.2 Understanding the needs and expectations of interested parties"
    },
    "Root_Cause": {
        "values": " Root Causes: The GS Intelligent Automation team or Citizen Developed did not perform compliance assessments on digital tools and automations deployed to determine if they are subject to SOX or PII data classification. This was due to the lack of established guidelines and procedures for conducting compliance assessments. As a result, the Alteryx workflow and subsequent output supporting a key SOX process in the area of A2R and Inventory Management in GMED were not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements.TERMINATE"
    },
    "Impact": {
        "values": " Impact Statement:\n\nThe lack of compliance assessments on digital tools and automations deployed by the GS Intelligent Automation team or Citizen Developed poses a significant threat to the business. The Alteryx workflow and subsequent output, which supports a key SOX process in the area of A2R and Inventory Management in GMED, are not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements. This non-compliance could result in inaccurate financial reporting, leading to potential regulatory penalties, reputational damage, and financial loss. It is imperative to perform compliance assessments on all digital tools and automations deployed to determine if they are subject to SOX or PII data classification to ensure the validity of critical processes and maintain compliance with regulatory requirements. Failure to do so could result in severe consequences for the business.TERMINATE"
    },
    "Recommendation": {
        "values": " Issue Statement: The GS Intelligent Automation team or Citizen Developed have not performed compliance assessments on digital tools and automations deployed to determine if they are subject to SOX or PII data classification. One of the four GS IA deployments tested supports a key SOX process in the area of A2R and Inventory Management in GMED. However, this Alteryx workflow and subsequent output are not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements.\n\nRecommendation:\n\n1. The GS Intelligent Automation team and Citizen Developed should perform compliance assessments on all digital tools and automations deployed to determine if they are subject to SOX or PII data classification. This assessment should be conducted before deploying any new digital tools or automations.\n\n2. The Alteryx workflow and subsequent output that supports a key SOX process in the area of A2R and Inventory Management in GMED should be listed on relevant Critical Reports & Spreadsheet listings. This will ensure that the workflow is subject to annual testing per SOX 404 requirements.\n\n3. The GS Intelligent Automation team and Citizen Developed should establish a process to ensure that all digital tools and automations are subject to annual testing per SOX 404 requirements. This process should be documented and communicated to all relevant stakeholders.\n\n4. The GS Intelligent Automation team and Citizen Developed should ensure that all digital tools and automations that handle PII data are subject to appropriate data classification and protection measures. This will ensure compliance with relevant data protection regulations.\n\n5. The GS Intelligent Automation team and Citizen Developed should provide training to all relevant stakeholders on the importance of compliance assessments and annual testing of digital tools and automations. This will ensure that all stakeholders are aware of their responsibilities and the importance of compliance.TERMINATE.TERMINATE.TERMINATE."
    },
    "Management_Response": {
        "values": " Issue Statements:  One of the four GS IA deployment tested support a key SOX process in the area of A2R and Inventory Management in GMED. However, this Alteryx workflow and subsequent output are not listed on any relevant Critical Reports & Spreadsheet listings or tested annually per SOX 404 requirements. Recommendation: 1. The GS Intelligent Automation team and Citizen Developed should perform compliance assessments on all digital tools and automations deployed to determine if they are subject to SOX or PII data classification. This assessment should be conducted before deploying any new digital tools or automations. 2. The Alteryx workflow and subsequent output that supports a key SOX process in the area of A2R and Inventory Management in GMED should be listed on relevant Critical Reports & Spreadsheet listings. This will ensure that the workflow is subject to annual testing per SOX 404 requirements. 3. The GS Intelligent Automation team and Citizen Developed should establish a process to ensure that all digital tools and automations are subject to annual testing per SOX 404 requirements. This process should be documented and communicated to all relevant stakeholders. 4. The GS Intelligent Automation team and Citizen Developed should ensure that all digital tools and automations that handle PII data are subject to appropriate data classification and protection measures. This will ensure compliance with relevant data protection regulations. 5. The GS Intelligent Automation team and Citizen Developed should provide training to all relevant stakeholders on the importance of compliance assessments and annual testing of digital tools and automations. This will ensure that all stakeholders are aware of their responsibilities and the importance of compliance.TERMINATE.TERMINATE."
      },
    "Accountable_Contact": {
        "values": ""
    },
    "Agreed_Remediation_Date": {
        "values": ""
    },
    "_id": {
        "values": "3"
    },
    "_field": {
        "values": "itt has something on me"
    }
};
  
  differences : any;
  keys : any[] = [];
  values : any[] = [];

 
 

  
  res : string = "";
  changedKey : string[] = [];
  
  result: string = '';
  totalResults : string[] = [];


  computeDiff(lhs : string, rhs : string) {
    const lhsWords = lhs.split(' ');
    const rhsWords = rhs.split(' ');
    
    let result = '';
    const diffs = diffWords(lhs, rhs);
    
    diffs.forEach((part) => {
      if (part.added) {
        result += `<span class='added'"> ${part.value}</span>`;
      } else if (part.removed) {
        result += `<span class='removed'"> ${part.value}</span>`;
      } else {
        result += part.value;  // Common text from both LHS and RHS
      }
    });
    

    this.result = result;
    this.totalResults.push(this.result);
  }
 

  
  constructor(private jsonComparisonService: JsonComparisonService) {}
 

  ngOnInit(): void {
    // 
    this.keys = Object.keys(this.lhsJson);
    this.values = Object.values(this.lhsJson).map(item => item.values);
    console.log(this.totalResults);
    
  
    this.differences = DeepDiff.diff(this.lhsJson, this.rhsJson);
    let newJson = this.rhsJson;

    
    //Code to get the keys where there are changes ========================================
    for (let i of this.differences) {
      if (i.path && i.path.length > 0) {
        this.changedKey.push(i.path[0]);  
      }
    }
    
    console.log("changedKeys: ", this.changedKey); 
    
    const key : string = this.changedKey[0];  
    console.log(key);
    
    // Extract value using the key and apply computeDiff ==============================
    for(let i=0;i<this.differences.length;i++)
    {
      const str1 = (this.lhsJson as any)[this.changedKey[i]]?.values;  
      const str2 = (this.rhsJson as any)[this.changedKey[i]]?.values;
      this.computeDiff(str1, str2);
    }
    
    const str3 = (this.lhsJson as any)[this.changedKey[1]]?.values;  
    const str4 = (this.rhsJson as any)[this.changedKey[1]]?.values;  
    
    // this.computeDiff(str3, str4);
    console.log(this.rhsJson);
    console.log(this.differences);

    


    console.log(this.result);
    // console.log(this.res);

    console.log(this.differences[0].path[0]);
    console.log(this.values);

    
  }
}

