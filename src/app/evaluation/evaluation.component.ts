import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {

  isConfusionMatrix: boolean = true;
  isTestSplit: boolean = true;

  confusionMatrixHeadings: string[] = [
    "Glioma",
    "Meningioma",
    "Pituitary",
    "No Tumor"
  ];

  classificationReportHeadings: string[] = [
    "Precision",
    "Recall",
    "F1-Score",
    "Accuracy",
    "Support"
  ];

  confusionMatrixTestSplit: string[][] = [
    ["Glioma", "1724", "0", "0", "1"],
    ["Meningioma", "4", "1204", "6", "1"],
    ["Pituitary", "1", "4", "1423", "0"],
    ["No Tumor", "0", "0", "0", "379"],
  ]

  confusionMatrixTestingDataset: string[][] = [
    ["Glioma", "3916", "5", "12", "24"],
    ["Meningioma", "149", "4180", "56", "60"],
    ["Pituitary", "2", "6", "4353", "6"],
    ["No Tumor", "121", "36", "8", "3420"],
  ]

  classificationReportTestSplit: string[][] = [
    ["Glioma", "1.00", "1.00", "1.00", "0.99", "1725"],
    ["Meningioma", "1.00", "0.99", "0.99", "0.99", "1214"],
    ["Pituitary", "1.00", "1.00", "1.00", "0.99", "1428"],
    ["No Tumor", "1.00", "1.00", "1.00", "1.00", "379"],
  ]

  classificationReportTestingDataset: string[][] = [
    ["Glioma", "0.94", "0.99", "0.96", "0.99", "3957"],
    ["Meningioma", "0.99", "0.94", "0.96", "0.94", "4445"],
    ["Pituitary", "0.98", "1.00", "0.99", "0.99", "4367"],
    ["No Tumor", "0.97", "0.95", "0.96", "0.96", "3585"],
  ]

  currentHeadings?: string[];
  currentData?: string[][];

  constructor() {
    this.currentHeadings = this.confusionMatrixHeadings;
    this.currentData = this.confusionMatrixTestSplit;
  }

  displayConfusionMatrix() {
    this.currentHeadings = this.confusionMatrixHeadings;
    this.currentData = this.confusionMatrixTestSplit;
    this.isConfusionMatrix = true;
    this.isTestSplit = true;
  }

  displayClassificationReport() {
    this.currentHeadings = this.classificationReportHeadings;
    this.currentData = this.classificationReportTestSplit;
    this.isConfusionMatrix = false;
    this.isTestSplit = true;
  }

  displayTestSplit() {
    if (this.isConfusionMatrix) this.currentData = this.confusionMatrixTestSplit
    else this.currentData = this.classificationReportTestSplit
  }

  displayTestingDataset() {
    if (this.isConfusionMatrix) this.currentData = this.confusionMatrixTestingDataset
    else this.currentData = this.classificationReportTestingDataset;
  }

}
