describe('jasmine-node-flat', function(){
    it('should pass', function(){
        expect(1+2).toEqual(3);
    });
    it('should fail', function(){
        expect(1+2).not.toEqual(12);
    });
});