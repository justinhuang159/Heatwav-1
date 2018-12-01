//
//  Welcome3.swift
//  Heatwav
//
//  Created by Stanley Zeng on 12/1/18.
//  Copyright © 2018 Stanley Zeng. All rights reserved.
//

import UIKit

class Welcome3: UIViewController {
    
    @IBAction func toWelcome4(_ sender: Any) {
        
        performSegue(withIdentifier: "toW4", sender: sender)}

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
