const bcrypt = require('bcryptjs')
const { User } = require("../../src/app/models")
const truncate = require('../utils/truncate')

describe("user", ()=>{
    beforeEach(async ()=>{
        await truncate()
    })

    it("should", async ()=>{
        const user = await User.create({ name: "John", email: "carlos@giigke", password:"123456"})
        const hash = await bcrypt.hash("123456", 8)

        const compareHash = await bcrypt.compare('123456', user.password_hash)
        expect(compareHash).toBe(true)
    })
})

