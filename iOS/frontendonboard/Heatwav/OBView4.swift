//
//  OBView4.swift
//  Heatwav
//
//  Created by Stanley Zeng on 10/5/18.
//  Copyright © 2018 Stanley Zeng. All rights reserved.
//

import UIKit

class OBView4: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    @IBAction func toOBView5(_ sender: Any) {
        
        performSegue(withIdentifier: "toSMSLogin", sender: sender)}
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
