//
//  ViewController.swift
//  Heatwav
//
//  Created by Stanley Zeng on 9/16/18.
//  Copyright © 2018 Stanley Zeng. All rights reserved.
//

import UIKit

class OBView1: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.setNavigationBarHidden(true, animated: false)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

