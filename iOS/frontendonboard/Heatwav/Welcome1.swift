//
//  Welcome1.swift
//  Heatwav
//
//  Created by Stanley Zeng on 10/26/18.
//  Copyright © 2018 Stanley Zeng. All rights reserved.
//

import UIKit

class Welcome1: UIViewController {
    
    @IBAction func toWelcome2(_ sender: Any) {
        
        performSegue(withIdentifier: "toW2", sender: sender)}
    
    @IBOutlet var successIndication: UILabel! = UILabel()
    
    var message: String?
    
    override func viewDidLoad() {
        if let resultToDisplay = message {
            successIndication.text = resultToDisplay
        } else {
            successIndication.text = "Something went wrong!"
        }
        super.viewDidLoad()
    }
}
