import express from "express";
import { CheckToken } from "../middleware/ChechkAuth.js";
import cloudinary from "cloudinary";

import WorkTrackModel from "../model/WorkTrackModel.js";

const router = express.Router();

router.use(CheckToken)


router.post('/newEmploye', async (req, res) => {
    // #swagger.tags = ['WorkTrack']

    /* #swagger.parameters['employeeID'] = {
        in: 'formData',
        description: 'Employee ID',
        required: true,
        type: 'string'
    } */

    /* #swagger.parameters['photo'] = {
       in: 'formData',
       description: 'Employee photo',
       type: 'file'
   } */

    /* #swagger.parameters['name'] = {
       in: 'formData',
       description: 'Employee name',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['dob'] = {
       in: 'formData',
       description: 'Employee date of birth',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['gender'] = {
       in: 'formData',
       description: 'Employee gender',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['nationality'] = {
       in: 'formData',
       description: 'Employee nationality',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['mothersName'] = {
       in: 'formData',
       description: 'Employee mother\'s name',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['homeCountryAddress'] = {
       in: 'formData',
       description: 'Employee home country address',
       required: true,
       type: 'number'
   } */

    /* #swagger.parameters['homeCountryPhone'] = {
       in: 'formData',
       description: 'Employee home country phone number',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['emergencyContactName'] = {
       in: 'formData',
       description: 'Emergency contact name',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['emergencyContactPhone'] = {
       in: 'formData',
       description: 'Emergency contact phone number',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['email'] = {
       in: 'formData',
       description: 'Employee email address',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['passportNo'] = {
       in: 'formData',
       description: 'Employee passport number',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['passportExpiryDate'] = {
       in: 'formData',
       description: 'Employee passport expiry date',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['passportIssuingCountry'] = {
       in: 'formData',
       description: 'Employee passport issuing country',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['companyName'] = {
       in: 'formData',
       description: 'Employee company name',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['joiningDate'] = {
       in: 'formData',
       description: 'Employee joining date',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['category'] = {
       in: 'formData',
       description: 'Employee category',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['designation'] = {
       in: 'formData',
       description: 'Employee designation',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['basicSalary'] = {
       in: 'formData',
       description: 'Employee basic salary',
       required: true,
       type: 'number'
   } */

    /* #swagger.parameters['accommodationAllowance'] = {
       in: 'formData',
       description: 'Accommodation allowance for employee',
       required: true,
       type: 'number'
   } */

    /* #swagger.parameters['travellingAllowance'] = {
       in: 'formData',
       description: 'Travelling allowance for employee',
       required: true,
       type: 'number'
   } */

    /* #swagger.parameters['others'] = {
       in: 'formData',
       description: 'Other allowances for employee',
       required: true,
       type: 'number'
   } */

    /* #swagger.parameters['currentGrossSalary'] = {
       in: 'formData',
       description: 'Employee current gross salary',
       required: true,
       type: 'number'
   } */

    /* #swagger.parameters['eligibilityForOvertime'] = {
       in: 'formData',
       description: 'Employee eligibility for overtime',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['ministryDesignation'] = {
       in: 'formData',
       description: 'Employee ministry designation',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['ministryBasicSalary'] = {
       in: 'formData',
       description: 'Employee ministry basic salary',
       required: true,
       type: 'number'
   } */

    /* #swagger.parameters['ministryGrossSalary'] = {
       in: 'formData',
       description: 'Employee ministry gross salary',
       required: true,
       type: 'number'
   } */

    /* #swagger.parameters['laborCardNo'] = {
       in: 'formData',
       description: 'Employee labor card number',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['laborCardIssuanceDate'] = {
       in: 'formData',
       description: 'Employee labor card issuance date',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['laborCardExpiry'] = {
       in: 'formData',
       description: 'Employee labor card expiry date',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['visaNo'] = {
       in: 'formData',
       description: 'Employee visa number',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['visaIssuanceDate'] = {
       in: 'formData',
       description: 'Employee visa issuance date',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['visaExpiry'] = {
       in: 'formData',
       description: 'Employee visa expiry date',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['emiratesIDNo'] = {
       in: 'formData',
       description: 'Employee emirates ID number',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['emiratesIDIssuanceDate'] = {
       in: 'formData',
       description: 'Employee emirates ID issuance date',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['emiratesIDExpiry'] = {
       in: 'formData',
       description: 'Employee emirates ID expiry date',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['salaryPaymentMode'] = {
       in: 'formData',
       description: 'Employee salary payment mode',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['bankAccountDetails'] = {
       in: 'formData',
       description: 'Employee bank account details',
       required: true,
       type: 'string'
   } */

    /* #swagger.parameters['status'] = {
       in: 'formData',
       description: 'Employee status',
       required: true,
       type: 'string'
   } */


    try {
        const transactionsFile = req.files;
        let photoUrl = null;
        let photoId = null;

        const employe = req.body

        // img upload
        if (transactionsFile) {
            const { photo } = transactionsFile;

            try {
                const uploadImg = await cloudinary.uploader.upload(
                    photo.tempFilePath,
                    {
                        use_filename: true,
                        folder: "Home/new",
                    }
                );
                photoUrl = uploadImg.url;
                photoId = uploadImg.public_id;
            } catch (error) {
                console.log(error);
                return res.json({ message: "Error in uploading photo" });
            }

        }

        const data = { ...employe, photo: photoUrl, photoId };

        const newEmploye = new WorkTrackModel(data);
        await newEmploye.save();

        return res.json({ message: "Employee added successfully", data });
    } catch (error) {
        console.log(error);
        return res.json({ message: "Error in adding employee" });
    }
});

router.put('/editEmploye/:id', async (req, res) => {
    // #swagger.tags = ['WorkTrack']

    /* #swagger.parameters['employeeID'] = {
        in: 'formData',
        description: 'Employee ID',
        type: 'string'
    } */

    /* #swagger.parameters['photo'] = {
       in: 'formData',
       description: 'Employee photo',
       type: 'file'
   } */

    /* #swagger.parameters['name'] = {
       in: 'formData',
       description: 'Employee name',
       type: 'string'
   } */

    /* #swagger.parameters['dob'] = {
       in: 'formData',
       description: 'Employee date of birth',
       type: 'string'
   } */

    /* #swagger.parameters['gender'] = {
       in: 'formData',
       description: 'Employee gender',
       type: 'string'
   } */

    /* #swagger.parameters['nationality'] = {
       in: 'formData',
       description: 'Employee nationality',
       type: 'string'
   } */

    /* #swagger.parameters['mothersName'] = {
       in: 'formData',
       description: 'Employee mother\'s name',
       type: 'string'
   } */

    /* #swagger.parameters['homeCountryAddress'] = {
       in: 'formData',
       description: 'Employee home country address',
       type: 'number'
   } */

    /* #swagger.parameters['homeCountryPhone'] = {
       in: 'formData',
       description: 'Employee home country phone number',
       type: 'string'
   } */

    /* #swagger.parameters['emergencyContactName'] = {
       in: 'formData',
       description: 'Emergency contact name',
       type: 'string'
   } */

    /* #swagger.parameters['emergencyContactPhone'] = {
       in: 'formData',
       description: 'Emergency contact phone number',
       type: 'string'
   } */

    /* #swagger.parameters['email'] = {
       in: 'formData',
       description: 'Employee email address',
       type: 'string'
   } */

    /* #swagger.parameters['passportNo'] = {
       in: 'formData',
       description: 'Employee passport number',
       type: 'string'
   } */

    /* #swagger.parameters['passportExpiryDate'] = {
       in: 'formData',
       description: 'Employee passport expiry date',
       type: 'string'
   } */

    /* #swagger.parameters['passportIssuingCountry'] = {
       in: 'formData',
       description: 'Employee passport issuing country',
       type: 'string'
   } */

    /* #swagger.parameters['companyName'] = {
       in: 'formData',
       description: 'Employee company name',
       type: 'string'
   } */

    /* #swagger.parameters['joiningDate'] = {
       in: 'formData',
       description: 'Employee joining date',
       type: 'string'
   } */

    /* #swagger.parameters['category'] = {
       in: 'formData',
       description: 'Employee category',
       type: 'string'
   } */

    /* #swagger.parameters['designation'] = {
       in: 'formData',
       description: 'Employee designation',
       type: 'string'
   } */

    /* #swagger.parameters['basicSalary'] = {
       in: 'formData',
       description: 'Employee basic salary',
       type: 'number'
   } */

    /* #swagger.parameters['accommodationAllowance'] = {
       in: 'formData',
       description: 'Accommodation allowance for employee',
       type: 'number'
   } */

    /* #swagger.parameters['travellingAllowance'] = {
       in: 'formData',
       description: 'Travelling allowance for employee',
       type: 'number'
   } */

    /* #swagger.parameters['others'] = {
       in: 'formData',
       description: 'Other allowances for employee',
       type: 'number'
   } */

    /* #swagger.parameters['currentGrossSalary'] = {
       in: 'formData',
       description: 'Employee current gross salary',
       type: 'number'
   } */

    /* #swagger.parameters['eligibilityForOvertime'] = {
       in: 'formData',
       description: 'Employee eligibility for overtime',
       type: 'string'
   } */

    /* #swagger.parameters['ministryDesignation'] = {
       in: 'formData',
       description: 'Employee ministry designation',
       type: 'string'
   } */

    /* #swagger.parameters['ministryBasicSalary'] = {
       in: 'formData',
       description: 'Employee ministry basic salary',
       type: 'number'
   } */

    /* #swagger.parameters['ministryGrossSalary'] = {
       in: 'formData',
       description: 'Employee ministry gross salary',
       type: 'number'
   } */

    /* #swagger.parameters['laborCardNo'] = {
       in: 'formData',
       description: 'Employee labor card number',
       type: 'string'
   } */

    /* #swagger.parameters['laborCardIssuanceDate'] = {
       in: 'formData',
       description: 'Employee labor card issuance date',
       type: 'string'
   } */

    /* #swagger.parameters['laborCardExpiry'] = {
       in: 'formData',
       description: 'Employee labor card expiry date',
       type: 'string'
   } */

    /* #swagger.parameters['visaNo'] = {
       in: 'formData',
       description: 'Employee visa number',
       type: 'string'
   } */

    /* #swagger.parameters['visaIssuanceDate'] = {
       in: 'formData',
       description: 'Employee visa issuance date',
       type: 'string'
   } */

    /* #swagger.parameters['visaExpiry'] = {
       in: 'formData',
       description: 'Employee visa expiry date',
       type: 'string'
   } */

    /* #swagger.parameters['emiratesIDNo'] = {
       in: 'formData',
       description: 'Employee emirates ID number',
       type: 'string'
   } */

    /* #swagger.parameters['emiratesIDIssuanceDate'] = {
       in: 'formData',
       description: 'Employee emirates ID issuance date',
       type: 'string'
   } */

    /* #swagger.parameters['emiratesIDExpiry'] = {
       in: 'formData',
       description: 'Employee emirates ID expiry date',
       type: 'string'
   } */

    /* #swagger.parameters['salaryPaymentMode'] = {
       in: 'formData',
       description: 'Employee salary payment mode',
       type: 'string'
   } */

    /* #swagger.parameters['bankAccountDetails'] = {
       in: 'formData',
       description: 'Employee bank account details',
       type: 'string'
   } */

    /* #swagger.parameters['status'] = {
       in: 'formData',
       description: 'Employee status',
       type: 'string'
   } */

    try {

        const { id } = req.params;
        const transactionsFile = req.files;

        let body = req.body;
        let data = { ...body };

        if (transactionsFile) {
            const { photo } = transactionsFile;
            const employeImg = await WorkTrackModel.findById(id);

            if (employeImg.photoId) {
                await cloudinary.uploader.destroy(employeImg.photoId);
            }

            const uploadImg = await cloudinary.uploader.upload(
                photo.tempFilePath,
                {
                    use_filename: true,
                    folder: "Home",
                }
            );

            data.photo = uploadImg.url;
            data.photoId = uploadImg.public_id;

        }

        const editEmploye = await WorkTrackModel.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                $set: data,
            },
            { new: true }
        );

        if (!editEmploye) {
            return res.json({ message: "Employee not found " });
        }

        return res.json({ message: "Employee updated successfully", editEmploye });

    } catch (error) {
        console.log(error);
        return res.json({ message: "Error in updating employee" });
    }

})

router.delete('/deleteEmployee/:id', async (req, res) => {
    // #swagger.tags = ['WorkTrack']
    // #swagger.description = 'Delete an employee record and associated photo if exists.'

    const { id } = req.params;

    try {
        const employee = await WorkTrackModel.findById(id);

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        if (employee.photoId) {
            await cloudinary.uploader.destroy(employee.photoId);
        }

        await WorkTrackModel.findByIdAndDelete(id);

        return res.status(200).json({ message: "Employee deleted successfully" });

    } catch (error) {
        console.error(error); // Better to use a logger in production
        return res.status(500).json({ message: "Error in deleting employee" });
    }
});



export default router;